module.exports = function (router, content) {
  // START__####################################################################################################
  // File: Reporting-crime-not-reported
  // Variable: none

  router.post('/concepts/minors/reporting-crime-not-reported', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/minors/check-your-answers-page')
    }
    res.redirect('/concepts/minors/who-is-making-the-application')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/reporting-crime-not-reported/', function (req, res) {
    res.render('concepts/minors/reporting-crime-not-reported/index', content)
  })

  // END__######################################################################################################
}
