module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/concepts/confirmation-choice/v2/british-citizen', function (req, res) {
  // Get the answer from the query string
  var britishCitizen = req.session.data['britishCitizen']

  if (britishCitizen === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/confirmation-choice/v2/transition')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/confirmation-choice/v2/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/confirmation-choice/v2/over-18')
  }
})

// Pass the question in to the page
router.get('/concepts/confirmation-choice/v2/british-citizen/', function (req, res) {
  res.render('concepts/confirmation-choice/v2/british-citizen/index', content)
})

router.get('/concepts/confirmation-choice/v2/british-citizen/british-citizen-error', function (req, res) {
  res.render('concepts/confirmation-choice/v2/british-citizen/british-citizen-error', content)
})

// END__######################################################################################################
}
