module.exports = function (router, content) {
  // START__####################################################################################################
  // File: transition

  router.post('/concepts/confirmation-choice/v2/rest-of-application', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/confirmation-choice/v2/check-your-answers-page')
    }
    res.redirect('https://www.cica.gov.uk/OAS/Account/Create')
  })

  // Pass the question in to the page
  router.get('/concepts/confirmation-choice/v2/rest-of-application/', function (req, res) {
    res.render('concepts/confirmation-choice/v2/rest-of-application/index', content)
  })

  // END__######################################################################################################
}
