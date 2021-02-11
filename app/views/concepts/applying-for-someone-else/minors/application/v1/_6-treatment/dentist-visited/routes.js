module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/dentist-visited', function (req, res) {
  // Get the answer from the query string

  var visitedDentist = req.session.data['visitedDentist']
  var visitedGP = req.session.data['visitedGP']
  var registeredGP = req.session.data['registeredGP']

  if (visitedDentist === 'No') {
    if (visitedGP === 'No') {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/hospital-visited/')
    } else {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_7-financial-losses/context-your-money/')
    }
  } else if (visitedDentist === 'Yes') {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/dentist-details')
  }
})

// Pass the question in to the page
router.get('/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/dentist-visited/', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/application/v1/_6-treatment/dentist-visited/index', content)
})


// END__######################################################################################################
}