module.exports = function (router, content) {
  // START__####################################################################################################
  // File: lost-earnings
  // Variable: sexualAssault

  router.post('/application/lost-earnings', function (req, res) {
    // Get the answer from the query string
    var lostEarnings = req.session.data['lostEarnings']

    if (lostEarnings === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/application/transition')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/special-expenses')
    }
  })

  // Pass the question in to the page
  router.get('/application/lost-earnings/', function (req, res) {
    res.render('application/lost-earnings/index', content)
  })
  // Error state
  router.get('/application/lost-earnings/error', function (req, res) {
    res.render('application/lost-earnings/error', content)
  })
  // Transition state
  router.get('/application/lost-earnings/transition', function (req, res) {
    res.render('application/lost-earnings/transition', content)
  })
  // END__######################################################################################################
}
