module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/context-medical-details', function (req, res) {
    res.redirect('/application/gp-registered')
  })

  // Pass the question in to the page
  router.get('/application/context-medical-details/', function (req, res) {
    res.render('application/context-medical-details/index', content)
  })
  // END__######################################################################################################
}
