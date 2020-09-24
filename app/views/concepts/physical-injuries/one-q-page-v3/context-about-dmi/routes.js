module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/physical-injuries/one-q-page-v3/context-about-dmi', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v3/dmi')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v3/context-about-dmi/', function (req, res) {
    res.render('application/context-about-dmi/index', content)
  })
  // END__######################################################################################################
}
