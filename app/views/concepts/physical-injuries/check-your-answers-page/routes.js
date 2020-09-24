module.exports = function (router, content) {
  // START__####################################################################################################
  // File: check-your-answers-page
   router.post('/physical-injuries/check-your-answers-page', function (req, res) {
     if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
       return res.redirect('/physical-injuries/check-your-answers-page')
     }
   })

   // Pass the question in to the page
   router.get('/physical-injuries/check-your-answers-page/', function (req, res) {
     res.render('physical-injuries/check-your-answers-page/index', content)
   })

  // END__######################################################################################################
}
