module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/application/british-citizen', function (req, res) {
  // Get the answer from the query string
  var britishCitizen = req.session.data['britishCitizen']

  if (britishCitizen === 'No') {
    // Redirect to the relevant page
    res.redirect('/application/transition')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/sexual-assault-application')
  }
})

// Pass the question in to the page
router.get('/application/british-citizen/', function (req, res) {
  res.render('application/british-citizen/index', content)
})

router.get('/application/british-citizen/british-citizen-error', function (req, res) {
  res.render('application/british-citizen/british-citizen-error', content)
})

router.get('/application/british-citizen/transition', function (req, res) {
  res.render('application/british-citizen/transition', content)
})

// END__######################################################################################################
}
