module.exports = function (router, content) {
  // START__####################################################################################################
  // File: fatal-application
  // Variable: direct-applicant

  router.post('/application/fatal-application', function (req, res) {
    // Get the answer from the query string
    var fatalApplication = req.session.data['fatalApplication']

    if (fatalApplication === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/who-is-making-the-application')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/transition')
    }
  })

  // Pass the question in to the page
  router.get('/application/fatal-application/', function (req, res) {
    res.render('application/fatal-application/index', content)
  })
  // Error state
  router.get('/application/fatal-application/error', function (req, res) {
    res.render('application/fatal-application/error', content)
  })
  // END__######################################################################################################
}
