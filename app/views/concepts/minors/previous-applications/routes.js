module.exports = function (router, content) {
  // START__####################################################################################################
  // File: previous-applications
  // Variable: previous-applications

  router.post('/concepts/minors/previous-applications', function (req, res) {

      // If the variable is any other value (or is missing) render the page requested
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/minors/check-your-answers-page')
      }
      res.redirect('/concepts/minors/compensation')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/previous-applications/', function (req, res) {
    res.render('concepts/minors/previous-applications/index', content)
  })

  // Pass the error content in to the page
  router.get('/concepts/minors/previous-applications/error', function (req, res) {
    res.render('concepts/minors/previous-applications/error', content)
  })
  // END__######################################################################################################
}
