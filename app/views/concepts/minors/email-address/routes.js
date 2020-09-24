module.exports = function (router, content) {
  // START__####################################################################################################
  // File: email-address
  // varialbe: email-address
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/concepts/minors/email-address', function (req, res) {
    if (!req.session.data['emailAddress']) {
      req.session.data['emailAddress'] = 'name@domain.com'
    }
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/minors/check-your-answers-page')
    }
    res.redirect('/concepts/minors/phone-number')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/email-address/', function (req, res) {
    res.render('concepts/minors/email-address/index', content)
  })
  // Pass the question in to the page
  router.get('/concepts/minors/email-address/error', function (req, res) {
    res.render('concepts/minors/email-address/error', content)
  })
  // END__######################################################################################################
}
