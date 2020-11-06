module.exports = function (router, content) {
  // START__####################################################################################################
  // File: contact-with-offender
  // Variable: know-offender

  router.post('/application/_4-offender/contact-with-offender', function (req, res) {
    // Get the answer from the query string
    var contactOffender = req.session.data['contact-offender']

    if (contactOffender === 'No')  {
      // Redirect to the relevant page
      res.redirect('/application/_5-injuries/context-physical-injuries')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/_4-offender/what-is-relationship')
    }
  })

  // Pass the question in to the page
  router.get('/application/_4-offender/contact-with-offender/', function (req, res) {
    res.render('application/_4-offender/contact-with-offender/index', content)
  })

  // Pass the question in to the error page
  router.get('/application/_4-offender/contact-with-offender/error', function (req, res) {
    res.render('application/_4-offender/contact-with-offender/error', content)
  })
  // END__######################################################################################################
}
