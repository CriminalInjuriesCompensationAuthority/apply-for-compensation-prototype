module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDuration

router.post('/concepts/mental-injuries/v4/duration', function (req, res) {
  // Get the answer from the query string
  var mentalHealthTime = req.session.data['mentalHealthDuration']

  if (mentalHealthTime === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/mental-injuries/v4/treatment-types')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/mental-injuries/v4/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/mental-injuries/v4/no-mental-injury')
  }
})

// Pass the question in to the page
router.get('/concepts/mental-injuries/v4/duration/', function (req, res) {
  res.render('concepts/mental-injuries/v4/duration/index', content)
})

router.get('/concepts/mental-injuries/v4/duration/duration-error', function (req, res) {
  res.render('concepts/mental-injuries/v4/duration/duration-error', content)
})

// END__######################################################################################################
}
