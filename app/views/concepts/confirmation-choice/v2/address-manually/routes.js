module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address-manually

  router.post('/concepts/confirmation-choice/v2/address-manually', function (req, res) {
    // Get the answer from the query string
    var confirmationPreference = req.session.data['confirmationPreference']

    if (confirmationPreference === 'Email') {
      // Redirect to the relevant page
      res.redirect('/concepts/confirmation-choice/v2/phone-number')
    } else if (confirmationPreference === 'Text') {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/confirmation-choice/v2/email-address')
    }
  })



  router.post('/concepts/confirmation-choice/v2/address-manually', function (req, res) {

    var emailConfirmation = req.session.data['minor-direct-applicant']

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/confirmation-choice/v2/check-your-answers-page')
    }
    res.redirect('/concepts/confirmation-choice/v2/phone-number')
  })

  // Pass the question in to the page
  router.get('/concepts/confirmation-choice/v2/address-manually/', function (req, res) {
    res.render('concepts/confirmation-choice/v2/address-manually/index', content)
  })

  router.get('/concepts/confirmation-choice/v2/address-manually/error-building-street-blank', function (req, res) {
    res.render('concepts/confirmation-choice/v2/address-manually/error-building-street-blank', content)
  })

  router.get('/concepts/confirmation-choice/v2/address-manually/error-town-city-blank', function (req, res) {
    res.render('concepts/confirmation-choice/v2/address-manually/error-town-city-blank', content)
  })

  router.get('/concepts/confirmation-choice/v2/address-manually/error-postcode', function (req, res) {
    res.render('concepts/confirmation-choice/v2/address-manually/error-postcode', content)
  })
  // END__######################################################################################################
}
