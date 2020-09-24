module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/physical-injuries/one-q-page-v3/context-medical-details', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v3/gp-registered')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v3/context-medical-details/', function (req, res) {
    res.render('application/context-medical-details/index', content)
  })
  // END__######################################################################################################
}
