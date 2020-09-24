module.exports = function (router, content) {
  // START__####################################################################################################
  // File: offender-name

  router.post('/application/offender-name', function (req, res) {
      res.redirect('/application/contact-with-offender')
  })

  // Pass the question in to the page
  router.get('/application/offender-name/', function (req, res) {
    res.render('application/offender-name/index', content)
  })

  // Pass the question in to the error page
  router.get('/application/offender-name/error', function (req, res) {
    res.render('application/offender-name/error', content)
  })
  // END__######################################################################################################
}
