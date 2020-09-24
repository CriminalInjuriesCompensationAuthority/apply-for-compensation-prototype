module.exports = function (router, content) {
  // START__####################################################################################################
  // File: sexual-assault-application
  // Variable: sexualAssault

  router.post('/concepts/indicent-type/option-d/sexual-assault-application', function (req, res) {
    // Get the answer from the query string
    var sexualAssault = req.session.data['sexualAssault']

    if (sexualAssault === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/indicent-type/option-d/crime-of-violence')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/indicent-type/end')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/indicent-type/option-d/sexual-assault-application/', function (req, res) {
    res.render('concepts/indicent-type/option-d/sexual-assault-application/index', content)
  })
  // Error state
  router.get('/concepts/indicent-type/option-d/sexual-assault-application/error', function (req, res) {
    res.render('concepts/indicent-type/option-d/sexual-assault-application/error', content)
  })
  // Transition state
  router.get('/concepts/indicent-type/option-d/sexual-assault-application/transition', function (req, res) {
    res.render('concepts/indicent-type/option-d/sexual-assault-application/transition', content)
  })
  // END__######################################################################################################
}
