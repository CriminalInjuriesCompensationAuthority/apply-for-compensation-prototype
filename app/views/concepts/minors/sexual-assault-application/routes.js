module.exports = function (router, content) {
  // START__####################################################################################################
  // File: sexual-assault-application
  // Variable: sexualAssault

  router.post('/concepts/minors/sexual-assault-application', function (req, res) {
    // Get the answer from the query string
    var sexualAssault = req.session.data['minorSexualAssault']

    if (sexualAssault === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/minors/transition')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/minors/incident-reported')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/minors/sexual-assault-application/', function (req, res) {
    res.render('concepts/minors/sexual-assault-application/index', content)
  })
  // Error state
  router.get('/concepts/minors/sexual-assault-application/error', function (req, res) {
    res.render('concepts/minors/sexual-assault-application/error', content)
  })
  // END__######################################################################################################
}
