module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/context-about-dmi', function (req, res) {
    res.redirect('/application/dmi')
  })

  // Pass the question in to the page
  router.get('/application/context-about-dmi/', function (req, res) {
    res.render('application/context-about-dmi/index', content)
  })
  // END__######################################################################################################
}
