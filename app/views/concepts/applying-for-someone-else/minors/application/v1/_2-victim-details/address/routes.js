module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/address', function (req, res) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/context-incident-details')
  })

  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/address/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/address/index', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/address/error-building-street-blank', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/address/error-building-street-blank', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/address/error-town-city-blank', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/address/error-town-city-blank', content)
  })

  router.get('/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/address/error-postcode', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/address/error-postcode', content)
  })
  // END__######################################################################################################
}
