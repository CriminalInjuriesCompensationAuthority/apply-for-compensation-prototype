module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/indicent-type/option-c/context-about-the-crime', function (req, res) {
    res.redirect('/concepts/indicent-type/option-c/sexual-assault-application')
  })

  // Pass the question in to the page
  router.get('/concepts/indicent-type/option-c/context-about-the-crime/', function (req, res) {
    res.render('concepts/indicent-type/option-c/context-about-the-crime/index', content)
  })
  // END__######################################################################################################
}
