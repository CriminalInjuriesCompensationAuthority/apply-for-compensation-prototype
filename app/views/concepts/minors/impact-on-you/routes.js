module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/minors/impact-on-you', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/minors/check-your-answers-page')
    }
    res.redirect('/concepts/minors/your-choices')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/impact-on-you/', function (req, res) {
    res.render('concepts/minors/impact-on-you/index', content)
  })
  // END__######################################################################################################
}
