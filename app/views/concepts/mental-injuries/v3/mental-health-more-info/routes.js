module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthMoreInfo

router.post('/concepts/mental-injuries/v3/mental-health-more-info', function (req, res) {
  // Get the answer from the query string
  var mentalHealthMoreInfo = req.session.data['mentalHealthMoreInfoMoreInfo']

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/mental-injuries/v3/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/mental-injuries/v3/duration')
})

// Pass the question in to the page
router.get('/concepts/mental-injuries/v3/mental-health-more-info/', function (req, res) {
  res.render('concepts/mental-injuries/v3/mental-health-more-info/index', content)
})

router.get('/concepts/mental-injuries/v3/mental-health-more-info/mental-health-more-info-error', function (req, res) {
  res.render('concepts/mental-injuries/v3/mental-health-more-info/mental-health-more-info-error', content)
})

// END__######################################################################################################
}
