module.exports = function (router, content) {
  // START__####################################################################################################
  // File: find-uk-address
  // will produce an address on one line on the 'check your answers page'
  router.post('/application/find-uk-address', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/phone-number')
  })

  // Pass the question in to the page
  router.get('/application/find-uk-address/', function (req, res) {
    res.render('application/find-uk-address/index', content)
  })
  // END__######################################################################################################
}
