module.exports = function (router, content) {
  // START__####################################################################################################
  // File: authority-to-apply
  // Variable: direct-applicant

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/authority-to-apply', function (req, res) {
    // Get the answer from the query string
    var legalGuardian = req.session.data['legalGuardian']

    if (legalGuardian === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/authority-to-apply/transition')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/context-your-details')
    }
  })


  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/authority-to-apply/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/authority-to-apply/index', content)
  })

  // END__######################################################################################################
}
