const express = require('express')
const router = express.Router()
const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates

// START__Helpers functions ####################################################################################################################################

// the functions below will help get the date we need to cover the over 2 years delay for applying and the over 48h delay for reporting

function getDatefrom3inputs(inputDay, inputMonth, inputYear) {
    // using the 3 variables above to create a date object with moment
    var year = Number.parseInt(inputYear, 10); // making sure with have a well formated number for year, month and day
    var month = Number.parseInt(inputMonth - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract 1
    var day = Number.parseInt(inputDay, 10);
    var date = moment([year, month, day]); //create a date from the 3 elements we received from the user
    return date
}

function getDatefrom2inputs(inputMonth, inputYear) {
  // using the 2 variables above to create a date object with moment which will be the last day of the month
  var year = Number.parseInt(inputYear, 10); // making sure with have a well formated number for year, month and day
  var month = Number.parseInt(inputMonth - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract 1
  var date = moment([year, month]).endOf('month'); //create a date from the 2 elements we received from the user which is the last day of the month
  return date
}

function isReportedOver48h(incident, report) {
  var delay = moment.duration(report.diff(incident)); // / calculate the difference between the two (that's in milliseconds or something)
  var delayInDays = delay.asDays(); // take that number in days  - we can do that thanks to the Moment library
  return (delayInDays > 2) //reported more than 48h = 2 days after the incident
}
// END__#############################################################################################################################################################


// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

// START__####################################################################################################
// File: stepped-guide
// Variable: step
// router.get('/stepped-guide', function (req, res) {
// 	var step = req.query.step;
// 	return res.render('stepped-guide', { step: step});
// })
// END__######################################################################################################











// START__####################################################################################################
// File: your-choices


// router.post('/application/your-choices', function (req, res) {
//   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
//     return res.redirect('/application/check-your-answers-page')
//   }
//   res.redirect('/application/make-your-choice')
// })
// END__######################################################################################################



// START__####################################################################################################
// File: representative-type
// Variable: friend-or-family

router.post('/application/representative-type', function (req, res) {
  // Get the answer from the query string
  var friendOrFamily = req.session.data['friend-or-family']

  if (friendOrFamily === 'no') {
    // Redirect to the relevant page which is the private beta for rep
    res.redirect('https://beta.cica.gov.uk/')
  } else {
    // taking them to the OAS website live to create an account there
    res.redirect('https://www.cica.gov.uk/OAS/Account/Create')
  }
})
// END__######################################################################################################







// START__####################################################################################################
// File: residence-1
// Variable: ordinarily-resident

router.post('/application/residence-1', function (req, res) {
  // Get the answer from the query string
  var ordinarilyResident = req.session.data['ordinarily-resident']

  if (ordinarilyResident === 'no') {
    // Redirect to the relevant page
    res.redirect('https://www.cica.gov.uk/OAS/Account/Create')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/criminal-convictions')
  }
})
// END__######################################################################################################









// START__####################################################################################################
// File: Reporting-crime-not-reported
// Variable: none

router.post('/application/reporting-crime-not-reported', function (req, res) {
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/single-or-multiple-incidents')
})
// END__######################################################################################################



// START__####################################################################################################
// File: reporting-delay
//
router.post('/application/reporting-delay', function (req, res) {
  //if the applicant might also have delayed applying  so we need to check
  var incidentDateDay = req.session.data['incident-date-day']
  var incidentDateMonth = req.session.data['incident-date-month']
  var incidentDateYear = req.session.data['incident-date-year']
  var  incidentDate = getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) //that's the incident date based on the 3 elements we received from the user
  // get today's date   and compare it to the date of incident
  var currentDate = moment().startOf('day'); // this line of code make sure that the day (today) is only counted at midnight, we are not counting against a certain time of the day
  var duration = moment.duration(currentDate.diff(incidentDate)); // / calculate the difference between the two (that's in milliseconds or something)
  var delayInYears = duration.asYears(); // take that number in years  - we can do that thanks to the Moment library
  //check if they delayed applying
  if (delayInYears > 2){ //apply more than 2 years after the incident
    return res.redirect('/application/application-delay')
  }
  req.session.data['applicationDelay'] = null; // this line is here to clear the data if the user had given a date over 2 years, and filled in a reason why but then change the incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
  // else we're under 2 years
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
 res.redirect('/application/incident-location')
})
// END__######################################################################################################













// START__####################################################################################################
// File: compensation-amount'
//
router.post('/application/compensation-amount', function (req, res) {
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page/')
  }
    res.redirect('/application/check-your-answers-page/index')
})
// END__######################################################################################################



// START__####################################################################################################
// File: find-uk-address
// will produce an address on one line on the 'check your answers page'
router.post('/application/find-uk-address', function (req, res) {
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/phone-number')
})
// END__######################################################################################################





// START__####################################################################################################
// File: how-much-compensation
//
router.post('/application/compensation-amount', function (req, res) {
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
    res.redirect('/application/single-or-multiple-incidents')
})
// END__######################################################################################################







// START__####################################################################################################
// File: incident-date
// Variables: incident-date-day, incident-date-month, incident-date-year

router.post('/application/incident-date', function (req, res) {
  // first I'm getting the data, this will be used to check if the date is 01/01/2017 which is the trigger to mock linked cases / previous applications
  var incidentDateDay = req.session.data['incident-date-day']
  var incidentDateMonth = req.session.data['incident-date-month']
  var incidentDateYear = req.session.data['incident-date-year']
  var  incidentDate = getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) //that's the incident date based on the 3 elements we received from the user
  // get today's date   and compare it to the date of incident
  var currentDate = moment().startOf('day'); // this line of code make sure that the day (today) is only counted at midnight, we are not counting against a certain time of the day
  var duration = moment.duration(currentDate.diff(incidentDate)); // / calculate the difference between the two (that's in milliseconds or something)
  var delayInYears = duration.asYears(); // take that number in years  - we can do that thanks to the Moment library

  if (req.session.data['incidentReported-day']) { //we have the data for the day the crime was reported (so we must have come back here from the 'Change' on the check your answer page as it's out of sequence)
    var reportingDateDay = req.session.data['incidentReported-day']
    var reportingDateMonth = req.session.data['incidentReported-month']
    var reportingDateYear = req.session.data['incidentReported-year']
    var reportingDate = getDatefrom3inputs(reportingDateDay,reportingDateMonth, reportingDateYear) //create a date that is the report date from the 3 elements we received from the user
    incidentDate = getDatefrom3inputs(incidentDateDay, incidentDateMonth, incidentDateYear) // we need the incident date to compare for delay reporting over 48h
    if ( isReportedOver48h(incidentDate, reportingDate)){ // changing the incident date is now triggering the reporting delay screen
      return res.redirect('/application/reporting-delay')
    }
  }
  req.session.data['reportingDelay'] = null; // this line is here to clear the data if the user had given a date over 2 days, and filled in a reason why but then change the report or incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page

  if ((incidentDateDay == 1) && (incidentDateMonth == 1) && (incidentDateYear == 2017)) { // mocking linked cases by checking against a set trigger date = 01/01/2017
    // Redirect to the relevant page
    res.redirect('/application/previous-applications')
  } else {
        if (delayInYears > 2){ //apply more than 2 years after the incident
          return res.redirect('/application/application-delay')
        }
        req.session.data['applicationDelay'] = null; // this line is here to clear the data if the user had given a date over 2 years, and filled in a reason why but then change the incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
        // else we're under 2 years
        if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
          return res.redirect('/application/check-your-answers-page')
        }
        res.redirect('/application/incident-location')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: application-delay
// we see that screen if the indicent date (or when the incident stopped for POA) is over 2 years from the date of application
//logic for it is for incident-date and period-of-abuse-end

router.post('/application/application-delay', function (req, res) {
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/incident-location')
})
// END__######################################################################################################

// START__####################################################################################################
// File: previous-applications
// Variable: previous-applications

router.post('/application/previous-applications', function (req, res) {
  // Get the answer from the query string
  var previousApplications = req.session.data['previous-applications']

  if (previousApplications === 'yes')  {
    // Redirect to the relevant page
    res.redirect('/application/previous-not-eligible')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/incident-location')
  }
})
// END__######################################################################################################













// START__####################################################################################################
// File: address
//
router.post('/application/address', function (req, res) {
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/phone-number')
})
// END__######################################################################################################







// START__####################################################################################################
// File: living-with-offender-before
// Variable: living-with-offender-before

router.post('/application/living-with-offender-before', function (req, res) {
  // Get the answer from the query string
  var withOffenderBefore = req.session.data['living-with-offender-before']

  if (withOffenderBefore === 'no')  {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // Redirect to the relevant page
    res.redirect('/application/ongoing-relationship')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/living-with-offender-now')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: living-with-offender-now
// Variable: living-with-offender-now

router.post('/application/living-with-offender-now', function (req, res) {
  // Get the answer from the query string
  var withOffenderNow = req.session.data['living-with-offender-now']

  if (withOffenderNow === 'no')  {
    // Redirect to the relevant page
    res.redirect('/application/ongoing-relationship')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('https://www.cica.gov.uk/oas/Account/Create')
  }
})
// END__######################################################################################################





// START__####################################################################################################
// File: your-application-OCJ-path
 router.post('/application/your-application-OCJ-path', function (req, res) {
    // Get the answer from the query string
    var selectOCJ = req.session.data['OCJ-chosen']
    if (selectOCJ === 'yes') {
      //Redirect to the relevant page
      return res.redirect('/application/check-your-answers-page')
    } else {
      res.redirect('/application/your-application-long-path')
    }
 })
// END__######################################################################################################

// START__####################################################################################################
// File: your-application-long-path
router.post('/application/your-application-long-path', function (req, res) {
  // Get the answer from the query string
  var selectLongPath = req.session.data['long-path-chosen']
  if (selectLongPath === 'yes') {
    //Redirect to the relevant page
    return res.redirect('https://www.cica.gov.uk/OAS/Account/Create')
  } else {
    res.redirect('/application/your-application-OCJ-path')
  }
})
// END__######################################################################################################

// START__####################################################################################################
// File: check-your-answers-page
// Variable: checking_answers is a session variable to know if we go back to this page or not when a user press 'continue' on some question pages
 router.get('/application/check-your-answers-page', function (req, res) {
   req.session.checking_answers = true // this is initially set to false on the declaration page to avoid false results if using the prototype more than once
   return res.render('application/check-your-answers-page')
 })
// END__######################################################################################################

// START__####################################################################################################
// File: confirmation-page-if-automatic-nil
// variable: apply-for-review

router.post('/application/confirmation-page-if-automatic-nil', function (req, res) {
  // Get the answer from the query string
  var applyForReview = req.session.data['apply-for-review']

  if (applyForReview  === 'yes') {
    // Redirect to the relevant page
    res.redirect('/application/confirmation-of-review')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('https://www.cica.gov.uk/oas/Account/Create')
  }
})
// END__######################################################################################################


// START__####################################################################################################
// File: what-are-you-applying-for
// variable: what-type-of-application-would-you-like-to-make?
// router.post('/application/what-are-you-applying-for', function (req, res) {
//   // Get the answer from the query string
//   var applicationType = req.session.data['what-type-of-application-would-you-like-to-make?'];
//   if (applicationType === 'physical-injury') {
//     // Redirect to the relevant page
//     res.redirect('https://www.cica.gov.uk/oas/Account/Create')
//   } else {
//     // If the variable is any other value (or is missing) render the page requested
//     res.redirect('/application/OCJ-service-option')
//   }
// })
// END__######################################################################################################

// START__####################################################################################################
// File: OCJ-service-option
// variable: service-option
// router.post('/application/OCJ-service-option', function (req, res) {
//   // Get the answer from the query string
//   var serviceOption = req.session.data['service-option']

//   if (serviceOption === 'no') {
//     // Redirect to the relevant page
//     res.redirect('https://www.cica.gov.uk/oas/Account/Create')
//   } else {
//     // If the variable is any other value (or is missing) render the page requested
//     res.redirect('/application/compensation')
//   }
// })
// END__######################################################################################################

// START__####################################################################################################
// File: additional-info
// router.post('/application/additional-info', function (req, res) {
//   res.redirect('/application/check-your-answers-page')
// })
// END__######################################################################################################

module.exports = router

// Try to keep these inclued in the same order as the journey.
// This makes it easy to find things.
//   Indent routes that relate to questions that are dependant on the previous one

require('./views/application/british-citizen/routes')(router);
require('./views/application/over-18/routes')(router);
require('./views/application/who-is-making-the-application/routes')(router);
require('./views/application/sexual-assault-application/routes')(router);
require('./views/application/after-1979/routes')(router);
  require('./views/application/same-family/routes')(router);
require('./views/application/you-have-a-choice/routes')(router);
require('./views/application/your-choices/routes')(router);
require('./views/application/declaration/routes')(router);
require('./views/application/criminal-convictions/routes')(router);
require('./views/application/tell-criminal-convictions/routes')(router);
require('./views/application/bridge/routes')(router);
require('./views/application/incident-reported/routes')(router);
require('./views/application/crime-reported-date/routes')(router);
require('./views/application/reporting-details-what-force/routes')(router);
require('./views/application/reporting-details-police-officer/routes')(router);
require('./views/application/crime-reference/routes')(router);
require('./views/application/single-or-multiple-incidents/routes')(router);
  require('./views/application/period-of-abuse-start/routes')(router);
  require('./views/application/period-of-abuse-end/routes')(router);
require('./views/application/incident-location/routes')(router);
require('./views/application/do-you-know-offender/routes')(router);
  require('./views/application/offender-name/routes')(router);
  require('./views/application/ongoing-relationship/routes')(router);
    require('./views/application/what-is-relationship/routes')(router);
require('./views/application/name/routes')(router);
require('./views/application/name-have-other/routes')(router);
  require('./views/application/name-other/routes')(router);
require('./views/application/date-of-birth/routes')(router);
require('./views/application/email-address/routes')(router);
require('./views/application/address/routes')(router);
  require('./views/application/address-manually/routes')(router);
  require('./views/application/address-non-UK/routes')(router);
require('./views/application/phone-number/routes')(router);
require('./views/application/compensation/routes')(router);
  require('./views/application/compensation-why-not/routes')(router);
  require('./views/application/compensation-who/routes')(router);
