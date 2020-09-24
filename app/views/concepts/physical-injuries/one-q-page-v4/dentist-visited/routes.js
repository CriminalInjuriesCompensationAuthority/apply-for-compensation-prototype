module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/physical-injuries/one-q-page-v4/dentist-visited', function (req, res) {
  // Get the answer from the query string

  var visitedDentist = req.session.data['visitedDentist']
  var visitedGP = req.session.data['visitedGP']
  var registeredGP = req.session.data['registeredGP']

  if (visitedDentist === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v4/dentist-details')
  } else {

    if ((registeredGP === 'No') && (visitedGP === 'No')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/hospital-visited/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/context-your-money/')
    }
  }
})

// Pass the question in to the page
router.get('/concepts/physical-injuries/one-q-page-v4/dentist-visited/', function (req, res) {
  res.render('concepts/physical-injuries/one-q-page-v4/dentist-visited/index', content)
})


// END__######################################################################################################
}
