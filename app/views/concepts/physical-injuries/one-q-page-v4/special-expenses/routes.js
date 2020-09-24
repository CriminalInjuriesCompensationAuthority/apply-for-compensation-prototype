module.exports = function (router, content) {
  // START__####################################################################################################
  // File: special-expenses
  // Variable: sexualAssault

  router.post('/concepts/physical-injuries/one-q-page-v4/special-expenses', function (req, res) {
    // Get the answer from the query string
    var specialExpenses = req.session.data['specialExpenses']

    if (specialExpenses === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/concepts/physical-injuries/one-q-page-v4/end')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/context-prev-compensation')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v4/special-expenses/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v4/special-expenses/index', content)
  })
  // Error state
  router.get('/concepts/physical-injuries/one-q-page-v4/special-expenses/error', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v4/special-expenses/error', content)
  })
  // Transition state
  router.get('/concepts/physical-injuries/one-q-page-v4/special-expenses/transition', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v4/special-expenses/transition', content)
  })
  // END__######################################################################################################
}
