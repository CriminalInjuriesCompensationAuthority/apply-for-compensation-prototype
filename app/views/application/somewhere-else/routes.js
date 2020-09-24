module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/application/somewhere-else', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/application/check-your-answers-page')
   }
   res.redirect('/application/do-you-know-offender-name')
  })

  // Pass the question in to the page
  router.get('/application/somewhere-else/', function (req, res) {
    res.render('application/somewhere-else/index', content)
  })

  // END__######################################################################################################
}
