module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthMoreInfo

router.post('/application/dmi-more-info', function (req, res) {
  // Get the answer from the query string
  var mentalHealthMoreInfo = req.session.data['mentalHealthMoreInfoMoreInfo']

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/context-medical-details')
})

// Pass the question in to the page
router.get('/application/dmi-more-info/', function (req, res) {
  res.render('application/dmi-more-info/index', content)
})


// END__######################################################################################################
}
