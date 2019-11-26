module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/minors/wales-location', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/concepts/minors/check-your-answers-page')
   }
   res.redirect('/concepts/minors/police-force')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/wales-location/', function (req, res) {
    res.render('concepts/minors/wales-location/index', content)
  })

  router.get('/concepts/minors/wales-location/error-town', function (req, res) {
    res.render('concepts/minors/wales-location/error-town', content)
  })

  router.get('/concepts/minors/wales-location/error-location', function (req, res) {
    res.render('concepts/minors/wales-location/error-location', content)
  })
  // END__######################################################################################################
}
