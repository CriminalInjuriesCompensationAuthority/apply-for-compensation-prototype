 module.exports = function (router, content) {
  // START__####################################################################################################
  // File: sexual-assault-application
  // Variable: crimeOfViolence

  router.post('/concepts/indicent-type/option-c/crime-of-violence', function (req, res) {
    // Get the answer from the query string
    var crimeOfViolence = req.session.data['crimeOfViolence']

    if (crimeOfViolence === 'No') {
      // Redirect to the relevant page
      res.redirect('/concepts/indicent-type/option-c/not-crime-violence')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/concepts/indicent-type/option-c/incident-description')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/indicent-type/option-c/crime-of-violence/', function (req, res) {
    res.render('concepts/indicent-type/option-c/crime-of-violence/index', content)
  })
  // Error state
  router.get('/concepts/indicent-type/option-c/crime-of-violence/error', function (req, res) {
    res.render('concepts/indicent-type/option-c/crime-of-violence/error', content)
  })
  // Transition state
  router.get('/concepts/indicent-type/option-c/crime-of-violence/transition', function (req, res) {
    res.render('concepts/indicent-type/option-c/crime-of-violence/transition', content)
  })
  // END__######################################################################################################
}
