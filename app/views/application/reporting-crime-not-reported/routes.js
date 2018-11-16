module.exports = function (router, content) {
  // START__####################################################################################################
  // File: Reporting-crime-not-reported
  // Variable: none

  router.post('/application/reporting-crime-not-reported', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/single-or-multiple-incidents')
  })

  // Pass the question in to the page
  router.get('/application/reporting-crime-not-reported/', function (req, res) {
    res.render('application/reporting-crime-not-reported/index', content)
  })

  // END__######################################################################################################
}
