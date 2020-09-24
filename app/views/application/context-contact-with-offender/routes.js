module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/context-contact-with-offender', function (req, res) {
    res.redirect('/application/do-you-know-offender-name')
  })

  // Pass the question in to the page
  router.get('/application/context-contact-with-offender/', function (req, res) {
    res.render('application/context-contact-with-offender/index', content)
  })
  // END__######################################################################################################
}
