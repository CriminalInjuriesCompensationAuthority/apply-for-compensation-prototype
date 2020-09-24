module.exports = function (router, content) {
  // START__####################################################################################################
  // File: over-18
  // Variable: over18

  router.post('/concepts/confirmation-choice/v2/over-18', function (req, res) {
    // Get the answer from the query string
    var over18 = req.session.data['over18']

    if (over18 === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/confirmation-choice/v2/transition')
    } else {
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/confirmation-choice/v2/check-your-answers-page')
      }
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/confirmation-choice/v2/who-is-making-the-application')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/confirmation-choice/v2/over-18/', function (req, res) {
    res.render('concepts/confirmation-choice/v2/over-18/index', content)
  })
  //error page
  router.get('/concepts/confirmation-choice/v2/over-18/error', function (req, res) {
    res.render('concepts/confirmation-choice/v2/over-18/error', content)
  })
  // END__######################################################################################################
}
