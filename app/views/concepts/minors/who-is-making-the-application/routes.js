module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: direct-applicant

  router.post('/concepts/minors/who-is-making-the-application', function (req, res) {
    // Get the answer from the query string
    var directApplicant = req.session.data['minor-direct-applicant']

    if (directApplicant === 'Someone else') {
      // Redirect to the relevant page
      res.redirect('/concepts/minors/who-are-you')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/sexual-assault-application')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/minors/who-is-making-the-application/', function (req, res) {
    res.render('concepts/minors/who-is-making-the-application/index', content)
  })
  // Error state
  router.get('/concepts/minors/who-is-making-the-application/error', function (req, res) {
    res.render('concepts/minors/who-is-making-the-application/error', content)
  })
  // END__######################################################################################################
}
