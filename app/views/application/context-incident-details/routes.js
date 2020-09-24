module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/context-incident-details', function (req, res) {
    res.redirect('/application/single-or-multiple-incidents')
  })

  // Pass the question in to the page
  router.get('/application/context-incident-details/', function (req, res) {
    res.render('application/context-incident-details/index', content)
  })
  // END__######################################################################################################
}
