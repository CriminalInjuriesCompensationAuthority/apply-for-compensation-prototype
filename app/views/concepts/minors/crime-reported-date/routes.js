const dateHelper = require('../../../../helpers/date');
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reported-date
  //
  router.post('/concepts/minors/crime-reported-date', function (req, res) {
  //  // all the functions used here are defined higher up in the code (near the start)
  //  var reportingDate
  //  var incidentDate

  //  if (req.session.data['incident-date-day']) { // this is a single incident and we have the data for the date (day, month and year)
  //    var incidentDateDay = req.session.data['incident-date-day']
  //    var incidentDateMonth = req.session.data['incident-date-month']
  //    var incidentDateYear = req.session.data['incident-date-year']
  //    incidentDate = dateHelper.getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) // we need the incident date to compare for delay reporting over 48h
  //    }
  //     else { if (req.session.data['period-of-abuse-end-month']){ // this is a period of abuse and we have the data for the end date (month and year)
  //      var POAEndMonth = req.session.data['period-of-abuse-end-month']
  //      var POAEndYear = req.session.data['period-of-abuse-end-year']
  //      incidentDate = dateHelper.getDatefrom2inputs(POAEndMonth, POAEndYear) // we need the date  of the last day of the month of the end of the period of abuse to compare for delay reporting over 48h
  //      } else {
  //        incidentDate = false
  //      }
  //    }
  //    if (req.session.data['incidentReported-day']) { //we have the data for the day the crime was reported
  //      var reportingDateDay = req.session.data['incidentReported-day']
  //      var reportingDateMonth = req.session.data['incidentReported-month']
  //      var reportingDateYear = req.session.data['incidentReported-year']
  //      reportingDate = dateHelper.getDatefrom3inputs(reportingDateDay,reportingDateMonth, reportingDateYear) //create a date that is the report date from the 3 elements we received from the user
  //    } else {
  //      reportingDate = false
  //    }

  //  if (incidentDate && reportingDate && dateHelper.isReportedOver48h(incidentDate, reportingDate)){
  //    return res.redirect('/concepts/minors/reporting-delay')
  //  }
   req.session.data['reportingDelay'] = null; // this line is here to clear the data if the user had given a date over 2 days, and filled in a reason why but then change the report or incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
   // else we're under 2 days

   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/concepts/minors/check-your-answers-page')
   }
   res.redirect('/concepts/minors/police-force')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/crime-reported-date/', function (req, res) {
    res.render('concepts/minors/crime-reported-date/index', content)
  })

  router.get('/concepts/minors/crime-reported-date/error-blank', function (req, res) {
    res.render('concepts/minors/crime-reported-date/error-blank', content)
  })

  router.get('/concepts/minors/crime-reported-date/error-past', function (req, res) {
    res.render('concepts/minors/crime-reported-date/error-past', content)
  })

  router.get('/concepts/minors/crime-reported-date/error-format', function (req, res) {
    res.render('concepts/minors/crime-reported-date/error-format', content)
  })

  router.get('/concepts/minors/crime-reported-date/error-incomplete', function (req, res) {
      res.render('concepts/minors/crime-reported-date/error-incomplete', content)
    })
  // END__######################################################################################################
}
