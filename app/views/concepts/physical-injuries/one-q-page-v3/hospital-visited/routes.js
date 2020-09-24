module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/physical-injuries/one-q-page-v3/hospital-visited', function (req, res) {
  // Get the answer from the query string

  var visitedHospital = req.session.data['visitedHospital']

  if (visitedHospital === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v3/context-your-money')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v3/hospital-details')
  }
})


// END__######################################################################################################
}
