module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address-manually
  // will produce an address on multiple lines on the 'check your answers page'
  router.post('/application/gp-details', function (req, res) {
    req.session.data['address-non-UK'] = null; // this line is here to clear the data if the user had used the non UK address initially as we don't want to have duplicated data in the end
    req.session.data['address-lookup-result'] = null; // this line is here to clear the data if the user had used the postcode look-up initially as we don't want to have duplicated data in the end
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/context-prev-compensation')
  })

  // Pass the question in to the page
  router.get('/application/gp-details/', function (req, res) {
    res.render('application/gp-details/index', content)
  })

  router.get('/application/gp-details/error-building-street-blank', function (req, res) {
    res.render('application/gp-details/error-building-street-blank', content)
  })

  router.get('/application/gp-details/error-town-city-blank', function (req, res) {
    res.render('application/gp-details/error-town-city-blank', content)
  })

  router.get('/application/gp-details/error-postcode', function (req, res) {
    res.render('application/gp-details/error-postcode', content)
  })
  // END__######################################################################################################
}
