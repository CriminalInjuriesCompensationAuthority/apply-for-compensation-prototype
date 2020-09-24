module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDiagnosis

router.post('/concepts/mental-injuries/v1/diagnosis', function (req, res) {
  // Get the answer from the query string
  var mentalHealthDiagnosis = req.session.data['mentalHealthDiagnosis']

  if (mentalHealthDiagnosis === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/mental-injuries/v1/clinical-psychologist')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/mental-injuries/v1/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/mental-injuries/v1/waiting-for-diagnosis')
  }
})

// Pass the question in to the page
router.get('/concepts/mental-injuries/v1/diagnosis/', function (req, res) {
  res.render('concepts/mental-injuries/v1/diagnosis/index', content)
})

router.get('/concepts/mental-injuries/v1/diagnosis/diagnosis-error', function (req, res) {
  res.render('concepts/mental-injuries/v1/diagnosis/diagnosis-error', content)
})

// END__######################################################################################################
}
