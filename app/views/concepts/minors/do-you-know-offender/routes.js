module.exports = function (router, content) {
  // START__####################################################################################################
  // File: do-you-know-offender
  // Variable: know-offender

  router.post('/concepts/minors/do-you-know-offender', function (req, res) {
    // Get the answer from the query string
    var knowOffender = req.session.data['know-offender']

    if (knowOffender === 'No')  {
      // Redirect to the relevant page
      res.redirect('/concepts/minors/previous-applications')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/minors/offender-name')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/minors/do-you-know-offender/', function (req, res) {
    res.render('concepts/minors/do-you-know-offender/index', content)
  })

  // Pass the question in to the error page
  router.get('/concepts/minors/do-you-know-offender/error', function (req, res) {
    res.render('concepts/minors/do-you-know-offender/error', content)
  })
  // END__######################################################################################################
}
