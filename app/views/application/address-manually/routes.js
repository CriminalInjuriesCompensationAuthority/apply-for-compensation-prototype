module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address-manually

  router.post('/application/address-manually', function (req, res) {
    // Get the answer from the query string
    var confirmationPreference = req.session.data['confirmationPreference']

    if (confirmationPreference === 'Email') {
      // Redirect to the relevant page
      res.redirect('/application/phone-number')
    } else if (confirmationPreference === 'Text') {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/email-address')
    }
  })

  router.post('/application/address-manually', function (req, res) {

    var emailConfirmation = req.session.data['minor-direct-applicant']

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/phone-number')
  })
  // Pass the question in to the page
  router.get('/application/address-manually/', function (req, res) {
    res.render('application/address-manually/index', content)
  })

  router.get('/application/address-manually/error-building-street-blank', function (req, res) {
    res.render('application/address-manually/error-building-street-blank', content)
  })

  router.get('/application/address-manually/error-town-city-blank', function (req, res) {
    res.render('application/address-manually/error-town-city-blank', content)
  })

  router.get('/application/address-manually/error-postcode', function (req, res) {
    res.render('application/address-manually/error-postcode', content)
  })
  // END__######################################################################################################
}
