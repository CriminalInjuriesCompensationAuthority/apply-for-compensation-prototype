module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/minors/england-location', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/concepts/minors/check-your-answers-page')
   }
   res.redirect('/concepts/minors/crime-reported-date')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/england-location/', function (req, res) {
    res.render('concepts/minors/england-location/index', content)
  })

  router.get('/concepts/minors/england-location/error-town', function (req, res) {
    res.render('concepts/minors/england-location/error-town', content)
  })

  router.get('/concepts/minors/england-location/error-location', function (req, res) {
    res.render('concepts/minors/england-location/error-location', content)
  })
  // END__######################################################################################################
}
