module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/application/dmi', function (req, res) {
  // Get the answer from the query string
  var haveDMI = req.session.data['dmiDoYouHave']

  if (haveDMI === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/application/dmi-duration')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/context-prev-compensation')
  }
})

// Pass the question in to the page
router.get('/application/dmi/', function (req, res) {
  res.render('application/dmi/index', content)
})

router.get('/application/dmi/mental-health-error', function (req, res) {
  res.render('application/dmi/mental-health-error', content)
})

// END__######################################################################################################
}
