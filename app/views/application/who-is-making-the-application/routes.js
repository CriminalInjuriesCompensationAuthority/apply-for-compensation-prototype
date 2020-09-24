module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: direct-applicant

  router.post('/application/who-is-making-the-application', function (req, res) {
    // Get the answer from the query string
    var directApplicant = req.session.data['direct-applicant']

    if (directApplicant === 'Myself') {
      // Redirect to the relevant page
      res.redirect('/application/british-citizen')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/transition')
    }
  })

  // Pass the question in to the page
  router.get('/application/who-is-making-the-application/', function (req, res) {
    res.render('application/who-is-making-the-application/index', content)
  })
  // Error state
  router.get('/application/who-is-making-the-application/error', function (req, res) {
    res.render('application/who-is-making-the-application/error', content)
  })
  // END__######################################################################################################
}
