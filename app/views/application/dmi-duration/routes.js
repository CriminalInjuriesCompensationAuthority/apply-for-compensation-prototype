module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDuration

router.post('/application/dmi-duration', function (req, res) {
  // Get the answer from the query string
  var dmiDuration = req.session.data['dmiDuration']

  if (dmiDuration === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/application/dmi-treatment-types')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/no-mental-injury')
  }
})

// Pass the question in to the page
router.get('/application/dmi-duration/', function (req, res) {
  res.render('application/dmi-duration/index', content)
})

router.get('/application/dmi-duration/dmi-duration-error', function (req, res) {
  res.render('application/dmi-duration/dmi-duration-error', content)
})

// END__######################################################################################################
}
