const dateHelper = require('../../../helpers/date');
module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/application/reporting-details-what-force', function (req, res) {
  // Get the answer from the query string
  var policeForceQuestion = req.session.data['policeForceQuestion'];
  var incidentDateDay = req.session.data['incident-date-day']
  var incidentDateMonth = req.session.data['incident-date-month']
  var incidentDateYear = req.session.data['incident-date-year']
  var incidentDate;

  if (policeForceQuestion === 'no') {
    // Redirect to the relevant page
    res.redirect('/application/reporting-details-what-force-manual')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }

    if (req.session.data['period-of-abuse-end-month']) { // this is a period of abuse and we have the data for the end date (month and year)
      var POAEndMonth = req.session.data['period-of-abuse-end-month']
      var POAEndYear = req.session.data['period-of-abuse-end-year']
      var reportingDateDay = req.session.data['incidentReported-day']
      var reportingDateMonth = req.session.data['incidentReported-month']
      var reportingDateYear = req.session.data['incidentReported-year']
      var reportingDate = dateHelper.getDatefrom3inputs(reportingDateDay,reportingDateMonth, reportingDateYear) //create a date that is the report date from the 3 elements we received from the user
      incidentDate = dateHelper.getDatefrom2inputs(POAEndMonth, POAEndYear) // we need the date  of the last day of the month of the end of the period of abuse to compare for delay reporting over 48h

      if ( dateHelper.isReportedOver48h(incidentDate, reportingDate)){ // changing the incident date is now triggering the reporting delay screen
        return res.redirect('/application/reporting-delay')
      }
    }

    if (req.session.data['incidentReported-day']) { //we have the data for the day the crime was reported (so we must have come back here from the 'Change' on the check your answer page as it's out of sequence)
      var reportingDateDay = req.session.data['incidentReported-day']
      var reportingDateMonth = req.session.data['incidentReported-month']
      var reportingDateYear = req.session.data['incidentReported-year']
      var reportingDate = dateHelper.getDatefrom3inputs(reportingDateDay,reportingDateMonth, reportingDateYear) //create a date that is the report date from the 3 elements we received from the user
      incidentDate = dateHelper.getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) // we need the incident date to compare for delay reporting over 48h

      if ( dateHelper.isReportedOver48h(incidentDate, reportingDate)){ // changing the incident date is now triggering the reporting delay screen
        return res.redirect('/application/reporting-delay')
      }
    }

    // If the variable is any other value (or is missing) render the page requesteds
    res.redirect('/application/do-you-know-offender-name')
  }
})

// Pass the question in to the page
router.get('/application/reporting-details-what-force', function (req, res) {
  res.render('application/reporting-details-what-force/index', content)
})

// END__######################################################################################################
}
