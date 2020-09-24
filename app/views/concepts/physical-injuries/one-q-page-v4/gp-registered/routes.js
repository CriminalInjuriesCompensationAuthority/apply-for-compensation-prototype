module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/physical-injuries/one-q-page-v4/gp-registered', function (req, res) {
  // Get the answer from the query string
  var mentalHealth = req.session.data['registeredGP']

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/physical-injuries/one-q-page-v4/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v4/gp-visited')
})

// Pass the question in to the page
router.get('/concepts/physical-injuries/one-q-page-v4/gp-registered/', function (req, res) {
  res.render('concepts/physical-injuries/one-q-page-v4/gp-registered/index', content)
})

// END__######################################################################################################
}
