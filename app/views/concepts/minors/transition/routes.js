module.exports = function (router, content) {
  // START__####################################################################################################
  // File: transition

  router.post('/concepts/minors/transition', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/minors/check-your-answers-page')
    }
    res.redirect('https://www.cica.gov.uk/OAS/Account/Create')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/transition/', function (req, res) {
    res.render('concepts/minors/transition/index', content)
  })

  // END__######################################################################################################
}
