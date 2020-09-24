module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/mental-injuries/v2/getting-treatment', function (req, res) {
  // Get the answer from the query string

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/mental-injuries/v2/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/mental-injuries/v2/diagnosis')

})

// Pass the question in to the page
router.get('/concepts/mental-injuries/v2/getting-treatment/', function (req, res) {
  res.render('concepts/mental-injuries/v2/getting-treatment/index', content)
})

router.get('/concepts/mental-injuries/v2/getting-treatment/getting-treatment-error', function (req, res) {
  res.render('concepts/mental-injuries/v2/getting-treatment/getting-treatment-error', content)
})

// END__######################################################################################################
}
