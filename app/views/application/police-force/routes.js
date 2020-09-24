module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/application/police-force', function (req, res) {
   res.redirect('/application/crime-reference')
  })

  // Pass the question in to the page
  router.get('/application/police-force/', function (req, res) {
    res.render('application/police-force/index', content)
  })


  // END__######################################################################################################
}
