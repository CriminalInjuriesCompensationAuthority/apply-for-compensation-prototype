module.exports = function (router, content) {
  // START__####################################################################################################
  // File: your-choices
  // Variable: yourChoice

  router.post('/concepts/minors/your-choices', function (req, res) {
    // Get the answer from the query string
    var minorChoice = req.session.data['minorChoice']

    if (minorChoice === 'Option 1: Sexual assault or abuse') {
      // Redirect to the relevant page
      res.redirect('/concepts/minors/victim-name')
    } else {
      // If the variable is any other value (or is missing) render the page requested

      res.redirect('/concepts/minors/transition')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/minors/your-choices/', function (req, res) {
    res.render('concepts/minors/your-choices/index', content)
  })
  // Error state
  router.get('/concepts/minors/your-choices/error', function (req, res) {
    res.render('concepts/minors/your-choices/error', content)
  })
  // END__######################################################################################################
}
