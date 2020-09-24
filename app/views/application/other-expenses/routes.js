module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/other-expenses', function (req, res) {
    res.redirect('/application/context-about-dmi')
  })

  // Pass the question in to the page
  router.get('/application/other-expenses/', function (req, res) {
    res.render('application/other-expenses/index', content)
  })
  // END__######################################################################################################
}
