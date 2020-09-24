module.exports = function (router, content) {
  // START__####################################################################################################
  // File: your-choices
  // Variable: yourChoice

  router.post('/application/your-choices', function (req, res) {
    // Get the answer from the query string
    var yourChoice = req.session.data['yourChoice']

    if (yourChoice === 'Option 1: Sexual assault or abuse') {
      // Redirect to the relevant page
      res.redirect('/application/incident-reported')
    } else {
      // If the variable is any other value (or is missing) render the page requested

      res.redirect('/application/your-choices/transition')
    }
  })

  // Pass the question in to the page
  router.get('/application/your-choices/', function (req, res) {
    res.render('application/your-choices/index', content)
  })
  // Error state
  router.get('/application/your-choices/error', function (req, res) {
    res.render('application/your-choices/error', content)
  })
  // Error state
  router.get('/application/your-choices/transition', function (req, res) {
    res.render('application/your-choices/transition', content)
  })

  // END__######################################################################################################
}
