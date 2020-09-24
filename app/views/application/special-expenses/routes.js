module.exports = function (router, content) {
  // START__####################################################################################################
  // File: special-expenses
  // Variable: sexualAssault

  router.post('/application/special-expenses', function (req, res) {
    // Get the answer from the query string
    var specialExpenses = req.session.data['specialExpenses']

    if (specialExpenses === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/application/transition')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/context-your-details')
    }
  })

  // Pass the question in to the page
  router.get('/application/special-expenses/', function (req, res) {
    res.render('application/special-expenses/index', content)
  })
  // Error state
  router.get('/application/special-expenses/error', function (req, res) {
    res.render('application/special-expenses/error', content)
  })
  // Transition state
  router.get('/application/special-expenses/transition', function (req, res) {
    res.render('application/special-expenses/transition', content)
  })
  // END__######################################################################################################
}
