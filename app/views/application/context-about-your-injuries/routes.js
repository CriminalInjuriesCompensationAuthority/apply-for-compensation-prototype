module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/context-about-your-injuries', function (req, res) {
    res.redirect('/application/your-claim')
  })

  // Pass the question in to the page
  router.get('/application/context-about-your-injuries/', function (req, res) {
    res.render('application/context-about-your-injuries/index', content)
  })
  // END__######################################################################################################
}
