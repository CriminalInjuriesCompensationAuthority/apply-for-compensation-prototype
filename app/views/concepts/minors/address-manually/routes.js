module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address-manually
  // will produce an address on multiple lines on the 'check your answers page'
  router.post('/concepts/minors/address-manually', function (req, res) {
    req.session.data['address-non-UK'] = null; // this line is here to clear the data if the user had used the non UK address initially as we don't want to have duplicated data in the end
    req.session.data['address-lookup-result'] = null; // this line is here to clear the data if the user had used the postcode look-up initially as we don't want to have duplicated data in the end
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/minors/check-your-answers-page')
    }
    res.redirect('/concepts/minors/child-address')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/address-manually/', function (req, res) {
    res.render('concepts/minors/address-manually/index', content)
  })

  router.get('/concepts/minors/address-manually/error-building-street-blank', function (req, res) {
    res.render('concepts/minors/address-manually/error-building-street-blank', content)
  })

  router.get('/concepts/minors/address-manually/error-town-city-blank', function (req, res) {
    res.render('concepts/minors/address-manually/error-town-city-blank', content)
  })

  router.get('/concepts/minors/address-manually/error-postcode', function (req, res) {
    res.render('concepts/minors/address-manually/error-postcode', content)
  })
  // END__######################################################################################################
}
