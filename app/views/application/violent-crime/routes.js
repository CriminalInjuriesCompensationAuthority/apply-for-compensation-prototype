module.exports = function (router, content) {
  // START__####################################################################################################
  // File: violent-crime
  // Variable: sexualAssault

  router.post('/application/violent-crime', function (req, res) {
    // Get the answer from the query string
    var violentCrime = req.session.data['violentCrime']

    if (violentCrime === 'No') {
      // Redirect to the relevant page
      res.redirect('/application/violent-crime/eligibility')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/incident-reported')
    }
  })

  router.post('/application/violent-crime/eligibility', function (req, res) {
    res.render('application/incident-reported/index', content)
  })



  // Pass the question in to the page
  router.get('/application/violent-crime/', function (req, res) {
    res.render('application/violent-crime/index', content)
  })
  router.get('/application/violent-crime/eligibility', function (req, res) {
    res.render('application/violent-crime/eligibility', content)
  })
    // Error state
  router.get('/application/violent-crime/error', function (req, res) {
    res.render('application/violent-crime/error', content)
  })
  // Transition state
  router.get('/application/violent-crime/transition', function (req, res) {
    res.render('application/violent-crime/transition', content)
  })
  // END__######################################################################################################
}
