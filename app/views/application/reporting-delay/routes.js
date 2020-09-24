const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const dateHelper = require('../../../helpers/date');
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: reporting-delay
  //
  router.post('/application/reporting-delay', function (req, res) {



    // If the variable is any other value (or is missing) render the page requesteds
    res.redirect('/application/do-you-know-offender-name')

    req.session.data['applicationDelay'] = null; // this line is here to clear the data if the user had given a date over 2 years, and filled in a reason why but then change the incident date to something that is ok now, so the reason should be clear to not be displayed on the CYA page
    // else we're under 2 years
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
   res.redirect('/application/incident-location')
  })

  // Pass the question in to the page
  router.get('/application/reporting-delay/', function (req, res) {
    res.render('application/reporting-delay/index', content)
  })

  // Pass the error state in to the page when no checkboxes are selected
  router.get('/application/reporting-delay/error-checkboxes', function (req, res) {
    res.render('application/reporting-delay/error-checkboxes', content)
  })

  // Pass the error state in to the page when text field is left empty
  router.get('/application/reporting-delay/error-explain', function (req, res) {
    res.render('application/reporting-delay/error-explain', content)
  })
  // END__######################################################################################################
}
