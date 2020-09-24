const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const dateHelper = require('../../../../helpers/date');
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: period-of-abuse-end
  //
  router.post('/concepts/minors/period-of-abuse-end', function (req, res) {
    var POAEndMonth = req.session.data['period-of-abuse-end-month']
    var POAEndYear = req.session.data['period-of-abuse-end-year']
    // now I'm using the 2 variables above to create a date object with moment to check if they delayed applying over 2 yearsconcepts/minors
    var year = Number.parseInt(POAEndYear, 10); // making sure with have a well formated number for year and month
    var month = Number.parseInt(POAEndMonth - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract
    var currentDate = moment().endOf('month'); // this line of code make sure that the date is using the last day of the current month
    var deadlineDate = moment(currentDate).subtract(2, 'year'); // this is two years ago, the end date will be compared to that deadline
    var dateOfEndOfPOA = moment([year, month]).endOf('month'); //create a date that is the end of the period of abuse from the 2 elements we received from the user (+making it the last day of that month)

    if (dateOfEndOfPOA < deadlineDate){ //apply more than 2 years after the end of the period of abuse
      return res.redirect('/concepts/minors/application-delay')
    }
    req.session.data['applicationDelay'] = null; // this line is here to clear the data if the user had given a date over 2 years, and filled in a reason why but then change the incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
    // else we're under 2 years

    if (req.session.data['incidentReported-day']) { //we have the data for the day the crime was reported (so we must have come back here from the 'Change' on the check your answer page as it's out of sequence)
    var reportingDateDay = req.session.data['incidentReported-day']
    var reportingDateMonth = req.session.data['incidentReported-month']
    var reportingDateYear = req.session.data['incidentReported-year']
    var reportingDate = dateHelper.getDatefrom3inputs(reportingDateDay,reportingDateMonth, reportingDateYear) //create a date that is the report date from the 3 elements we received from the user
    var POAEndMonth = req.session.data['period-of-abuse-end-month']
    var POAEndYear = req.session.data['period-of-abuse-end-year']
    var endofPeriodOfAbuseDate = dateHelper.getDatefrom2inputs(POAEndMonth, POAEndYear) // we need the date  of the last day of the month of the end of the period of abuse to compare for delay reporting over 48h
    if ( dateHelper.isReportedOver48h(endofPeriodOfAbuseDate, reportingDate)){ // changing the end of period of abuse date is now triggering the reporting delay screen
      return res.redirect('/concepts/minors/reporting-delay')
    }
  }
  req.session.data['reportingDelay'] = null; // this line is here to clear the data if the user had given a date over 2 days, and filled in a reason why but then change the report or incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
  // else we're under 2 days

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/minors/check-your-answers-page')
    }
    res.redirect('/concepts/minors/incident-location')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/period-of-abuse-end/', function (req, res) {
    res.render('concepts/minors/period-of-abuse-end/index', content)
  })

  router.get('/concepts/minors/period-of-abuse-end/error-past', function (req, res) {
    res.render('concepts/minors/period-of-abuse-end/error-past', content)
  })

  router.get('/concepts/minors/period-of-abuse-end/error-before-reported', function (req, res) {
    res.render('concepts/minors/period-of-abuse-end/error-before-reported', content)
  })

  router.get('/concepts/minors/period-of-abuse-end/error-after-started', function (req, res) {
    res.render('concepts/minors/period-of-abuse-end/error-after-started', content)
  })

  router.get('/concepts/minors/period-of-abuse-end/error-incomplete', function (req, res) {
    res.render('concepts/minors/period-of-abuse-end/error-incomplete', content)
  })
  // END__######################################################################################################
}
