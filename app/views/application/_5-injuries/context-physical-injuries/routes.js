module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_5-injuries/context-physical-injuries', function (req, res) {
    res.redirect('/application/_5-injuries/have-physical-injuries')
  })

  // Pass the question in to the page
  router.get('/application/_5-injuries/context-physical-injuries/', function (req, res) {
    res.render('application/_5-injuries/context-physical-injuries/index', content)
  })
  // END__######################################################################################################
}
