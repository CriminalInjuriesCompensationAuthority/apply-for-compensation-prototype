module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/context-prev-compensation', function (req, res) {
    res.redirect('/application/previous-applications')
  })

  // Pass the question in to the page
  router.get('/application/context-prev-compensation/', function (req, res) {
    res.render('application/context-prev-compensation/index', content)
  })
  // END__######################################################################################################
}
