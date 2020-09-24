module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/physical-injuries/one-q-page-v3/gp-visited', function (req, res) {
  // Get the answer from the query string

  var visitedGP = req.session.data['visitedGP']
  var registeredGP = req.session.data['registeredGP']

  if ((registeredGP === 'No') && (visitedGP === 'No')) {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v3/hospital-visited')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v3/gp-details')
  }
})

// Pass the question in to the page
router.get('/concepts/physical-injuries/one-q-page-v3/gp-visited/', function (req, res) {
  res.render('application/gp-visited/index', content)
})


// END__######################################################################################################
}
