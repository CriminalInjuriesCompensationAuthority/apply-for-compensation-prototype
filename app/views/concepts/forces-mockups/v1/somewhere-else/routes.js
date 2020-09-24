module.exports = function (router, content) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/concepts/forces-mockups/v1/somewhere-else', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/concepts/forces-mockups/v1/check-your-answers-page')
   }
   res.redirect('/concepts/forces-mockups/v1/do-you-know-offender')
  })

  // Pass the question in to the page
  router.get('/concepts/forces-mockups/v1/somewhere-else/', function (req, res) {
    res.render('concepts/forces-mockups/v1/somewhere-else/index', content)
  })

  // END__######################################################################################################
}
