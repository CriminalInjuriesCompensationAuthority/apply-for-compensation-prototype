const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const dateHelper = require('../../../../helpers/date');
module.exports = function (router, content) {

  // START__####################################################################################################
  // File: incident-date
  // Variables: incident-date-day, incident-date-month, incident-date-year

  router.post('/concepts/minors/incident-date', function (req, res) {
    // first I'm getting the data, this will be used to check if the date is 01/01/2017 which is the trigger to mock linked cases / previous applications
    var incidentDateDay = req.session.data['minor-incident-date-day']
    var incidentDateMonth = req.session.data['minor-incident-date-month']
    var incidentDateYear = req.session.data['minor-incident-date-year']
    var  incidentDate = dateHelper.getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) //that's the incident date based on the 3 elements we received from the user
    // get today's date   and compare it to the date of incident
    var currentDate = moment().startOf('day'); // this line of code make sure that the day (today) is only counted at midnight, we are not counting against a certain time of the day
    var duration = moment.duration(currentDate.diff(incidentDate)); // / calculate the difference between the two (that's in milliseconds or something)
    var delayInYears = duration.asYears(); // take that number in years  - we can do that thanks to the Moment library

    // if (req.session.data['incidentReported-day']) { //we have the data for the day the crime was reported (so we must have come back here from the 'Change' on the check your answer page as it's out of sequence)
    //   var reportingDateDay = req.session.data['incidentReported-day']
    //   var reportingDateMonth = req.session.data['incidentReported-month']
    //   var reportingDateYear = req.session.data['incidentReported-year']
    //   var reportingDate = dateHelper.getDatefrom3inputs(reportingDateDay,reportingDateMonth, reportingDateYear) //create a date that is the report date from the 3 elements we received from the user
    //   incidentDate = dateHelper.getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) // we need the incident date to compare for delay reporting over 48h
    //   if ( dateHelper.isReportedOver48h(incidentDate, reportingDate)){ // changing the incident date is now triggering the reporting delay screen
    //     return res.redirect('/application/reporting-delay')
    //   }
    // }
    // req.session.data['reportingDelay'] = null; // this line is here to clear the data if the user had given a date over 2 days, and filled in a reason why but then change the report or incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page

    if ((incidentDateDay == 1) && (incidentDateMonth == 1) && (incidentDateYear == 2017)) { // mocking linked cases by checking against a set trigger date = 01/01/2017
      // Redirect to the relevant page
      res.redirect('/concepts/minors/previous-applications')
    } else {
          if (delayInYears > 2){ //apply more than 2 years after the incident
            return res.redirect('/concepts/minors/application-delay')
          }
          req.session.data['applicationDelay'] = null; // this line is here to clear the data if the user had given a date over 2 years, and filled in a reason why but then change the incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
          // else we're under 2 years
          if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
            return res.redirect('/concepts/minors/check-your-answers-page')
          }
          res.redirect('/concepts/minors/incident-location')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/minors/incident-date/', function (req, res) {
    res.render('concepts/minors/incident-date/index', content)
  })

  router.get('/concepts/minors/incident-date/error-past', function (req, res) {
    res.render('concepts/minors/incident-date/error-past', content)
  })

  router.get('/concepts/minors/incident-date/error-before-reported', function (req, res) {
    res.render('concepts/minors/incident-date/error-before-reported', content)
  })

  router.get('/concepts/minors/incident-date/error-incomplete', function (req, res) {
    res.render('concepts/minors/incident-date/error-incomplete', content)
  })
  // END__######################################################################################################
}
