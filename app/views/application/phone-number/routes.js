module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/application/phone-number', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/context-incident-details')
  })

  // Pass the question in to the page
  router.get('/application/phone-number/', function (req, res) {
    res.render('application/phone-number/index', content)
  })

  router.get('/application/phone-number/error', function (req, res) {
    res.render('application/phone-number/error', content)
  })
  // END__######################################################################################################
}
