module.exports = function (router, content) {
  // START__####################################################################################################
  // File: special-payments
  // Variable: sexualAssault

  router.post('/application/special-payments', function (req, res) {
    // Get the answer from the query string
    var specialPayments = req.session.data['specialPayments']

    if (specialPayments === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/application/transition')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/lost-earnings')
    }
  })

  // Pass the question in to the page
  router.get('/application/special-payments/', function (req, res) {
    res.render('application/special-payments/index', content)
  })
  // Error state
  router.get('/application/special-payments/error', function (req, res) {
    res.render('application/special-payments/error', content)
  })
  // Transition state
  router.get('/application/special-payments/transition', function (req, res) {
    res.render('application/special-payments/transition', content)
  })
  // END__######################################################################################################
}
