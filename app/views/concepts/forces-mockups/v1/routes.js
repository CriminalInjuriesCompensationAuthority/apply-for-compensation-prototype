module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/application/england-location', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/application/check-your-answers-page')
   }
   res.redirect('/application/england-forces')
  })

  // Pass the question in to the page
  router.get('/application/england-location/', function (req, res) {
    res.render('application/england-location/index', content)
  })

  router.get('/application/england-location/error-town', function (req, res) {
    res.render('application/england-location/error-town', content)
  })

  router.get('/application/england-location/error-location', function (req, res) {
    res.render('application/england-location/error-location', content)
  })
  // END__######################################################################################################
}
