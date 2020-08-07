module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/concepts/physical-injuries/one-q-page-v4/dentist-details', function (req, res) {

    var visitedGP = req.session.data['visitedGP']
    var registeredGP = req.session.data['registeredGP']

    if (visitedDentist === 'Yes') {
      // Redirect to the relevant page
      res.redirect('/concepts/physical-injuries/one-q-page-v4/dentist-details')
    } else {

      if ((registeredGP === 'No') && (visitedGP === 'No')) {
        res.redirect('/concepts/physical-injuries/one-q-page-v4/hospital-visited/')
      } else {
        res.redirect('/concepts/physical-injuries/one-q-page-v4/treatment-details/')
      }
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v4/dentist-details/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v4/dentist-details/index', content)
  })

  // END__######################################################################################################
}
