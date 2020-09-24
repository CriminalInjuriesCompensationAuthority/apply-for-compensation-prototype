module.exports = function (router, content) {
  // START__####################################################################################################
  // File: email-address
  // varialbe: email-address
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/application/email-address', function (req, res) {
    if (!req.session.data['emailAddress']) {
      req.session.data['emailAddress'] = 'name@domain.com'
    }
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/context-incident-details')
  })

  // Pass the question in to the page
  router.get('/application/email-address/', function (req, res) {
    res.render('application/email-address/index', content)
  })
  // Pass the question in to the page
  router.get('/application/email-address/error', function (req, res) {
    res.render('application/email-address/error', content)
  })
  // END__######################################################################################################
}
