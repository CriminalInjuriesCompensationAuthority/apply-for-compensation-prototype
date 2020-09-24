module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/context-your-details', function (req, res) {
    res.redirect('/application/confirmation-options')
  })

  // Pass the question in to the page
  router.get('/application/context-your-details/', function (req, res) {
    res.render('application/context-your-details/index', content)
  })
  // END__######################################################################################################
}
