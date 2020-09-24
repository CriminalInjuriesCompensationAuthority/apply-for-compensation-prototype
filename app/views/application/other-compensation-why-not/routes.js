module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/other-compensation-why-not', function (req, res) {
    res.redirect('/application/check-your-answers-page')
 })

 // Pass the question in to the page
 router.get('/application/other-compensation-why-not/', function (req, res) {
   res.render('application/other-compensation-why-not/index', content)
 })

  // END__######################################################################################################
}
