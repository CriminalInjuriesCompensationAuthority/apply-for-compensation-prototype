module.exports = function (router, content) {
  // START__####################################################################################################
  // File: check-your-answers-page
   router.post('/application/check-your-answers-page', function (req, res) {
     if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
       return res.redirect('/application/check-your-answers-page')
     }
     res.redirect('/application/declaration')
   })

   // Pass the question in to the page
   router.get('/application/check-your-answers-page/', function (req, res) {
     res.render('application/check-your-answers-page/index', content)
   })

   // Pass the question in to the page
   router.get('/application/check-your-answers-page/', function (req, res) {
     res.render('application/check-your-answers-page/cya', content)
   })
  // END__######################################################################################################
}
