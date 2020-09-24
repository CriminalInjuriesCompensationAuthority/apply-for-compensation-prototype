module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/forces-mockups/v1/scotland-location', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/concepts/forces-mockups/v1/check-your-answers-page')
   }
   res.redirect('/concepts/forces-mockups/v1/police-force')
  })

  // Pass the question in to the page
  router.get('/concepts/forces-mockups/v1/scotland-location/', function (req, res) {
    res.render('concepts/forces-mockups/v1/scotland-location/index', content)
  })

  router.get('/concepts/forces-mockups/v1/scotland-location/error-town', function (req, res) {
    res.render('concepts/forces-mockups/v1/scotland-location/error-town', content)
  })

  router.get('/concepts/forces-mockups/v1/scotland-location/error-location', function (req, res) {
    res.render('concepts/forces-mockups/v1/scotland-location/error-location', content)
  })
  // END__######################################################################################################
}
