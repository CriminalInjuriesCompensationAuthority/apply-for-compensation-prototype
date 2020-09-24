module.exports = function (router, content) {
  // START__####################################################################################################
  // File: check-your-answers-page
   router.post('/concepts/minors/check-your-answers-page', function (req, res) {
     if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
       return res.redirect('/concepts/minors/check-your-answers-page')
     }
     res.redirect('/concepts/minors/confirmation-page')
   })

   // Pass the question in to the page
   router.get('/concepts/minors/check-your-answers-page/', function (req, res) {
     res.render('concepts/minors/check-your-answers-page/index', content)
   })

   // Pass the question in to the page
   router.get('/concepts/minors/check-your-answers-page/', function (req, res) {
     res.render('concepts/minors/check-your-answers-page/cya', content)
   })
  // END__######################################################################################################
}
