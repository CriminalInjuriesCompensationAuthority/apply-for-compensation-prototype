module.exports = function (router, content) {
  // START__####################################################################################################
  // File: phone-number
  //
  router.post('/concepts/confirmation-choice/v2/phone-number', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/confirmation-choice/v2/check-your-answers-page')
    }
    res.redirect('/concepts/confirmation-choice/v2/check-your-answers-page')
  })

  // Pass the question in to the page
  router.get('/concepts/confirmation-choice/v2/phone-number/', function (req, res) {
    res.render('concepts/confirmation-choice/v2/phone-number/index', content)
  })

  router.get('/concepts/confirmation-choice/v2/phone-number/error', function (req, res) {
    res.render('concepts/confirmation-choice/v2/phone-number/error', content)
  })
  // END__######################################################################################################
}
