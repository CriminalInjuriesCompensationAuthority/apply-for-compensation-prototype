module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/application/wales-location', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/application/check-your-answers-page')
   }
   res.redirect('/application/wales-forces')
  })

  // Pass the question in to the page
  router.get('/application/wales-location/', function (req, res) {
    res.render('application/wales-location/index', content)
  })

  // END__######################################################################################################
}
