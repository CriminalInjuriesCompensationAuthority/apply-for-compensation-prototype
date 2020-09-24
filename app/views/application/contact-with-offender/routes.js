module.exports = function (router, content) {
  // START__####################################################################################################
  // File: contact-with-offender
  // Variable: know-offender

  router.post('/application/contact-with-offender', function (req, res) {
    // Get the answer from the query string
    var contactOffender = req.session.data['contact-offender']

    if (contactOffender === 'No')  {
      // Redirect to the relevant page
      res.redirect('/concepts/physical-injuries/one-q-page-v4/context-physical-injuries')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/what-is-relationship')
    }
  })

  // Pass the question in to the page
  router.get('/application/contact-with-offender/', function (req, res) {
    res.render('application/contact-with-offender/index', content)
  })

  // Pass the question in to the error page
  router.get('/application/contact-with-offender/error', function (req, res) {
    res.render('application/contact-with-offender/error', content)
  })
  // END__######################################################################################################
}
