module.exports = function (router, content) {
  // START__####################################################################################################
  // File: confirmation
  // varialbe: confirmation
  // if the user has entered an email address, it will be in 'data'. If not, we put a default value for it: name@domain.com
  router.post('/application/confirmation-options', function (req, res) {

    var confirmationPreference = req.session.data['confirmationPreference']

    if (!req.session.data['emailAddress']) {
      req.session.data['emailAddress'] = 'name@domain.com'
    }
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    } else if (confirmationPreference === 'neither') {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/confirmation-options/transition')
    }
    res.redirect('/application/name')
  })

  // Pass the question in to the page
  router.get('/application/confirmation-options/', function (req, res) {
    res.render('application/confirmation-options/index', content)
  })


  // Pass the question in to the page
  router.get('/application/confirmation-options/transition', function (req, res) {
    res.render('application/confirmation-options/transition', content)
  })
  // END__######################################################################################################
}
