module.exports = function (router, content) {
  // START__####################################################################################################
  // File: physical-injuries
  // Variable: sexualAssault

  router.post('/application/physical-injuries', function (req, res) {
    // Get the answer from the query string
    var physicalInjuries = req.session.data['physicalInjuries']

    if (physicalInjuries === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/application/transition')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/special-payments')
    }
  })

  // Pass the question in to the page
  router.get('/application/physical-injuries/', function (req, res) {
    res.render('application/physical-injuries/index', content)
  })
  // Error state
  router.get('/application/physical-injuries/error', function (req, res) {
    res.render('application/physical-injuries/error', content)
  })
  // Transition state
  router.get('/application/physical-injuries/transition', function (req, res) {
    res.render('application/physical-injuries/transition', content)
  })
  // END__######################################################################################################
}
