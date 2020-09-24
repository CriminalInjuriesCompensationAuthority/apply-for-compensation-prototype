module.exports = function (router, content) {
  // START__####################################################################################################
  // File: who-is-making-the-application
  // Variable: direct-applicant

  router.post('/concepts/minors/who-are-you', function (req, res) {
    // Get the answer from the query string
    var minorRelationship = req.session.data['minorRelationship']

    if (minorRelationship === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/concepts/minors/british-citizen')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/minors/transition')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/minors/who-are-you/', function (req, res) {
    res.render('concepts/minors/who-are-you/index', content)
  })
  // Error state
  router.get('/concepts/minors/who-are-you/error', function (req, res) {
    res.render('concepts/minors/who-are-you/error', content)
  })
  // END__######################################################################################################
}
