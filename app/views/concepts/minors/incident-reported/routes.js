module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-reported
  // Variable: incidentReported
  router.post('/concepts/minors/incident-reported', function (req, res) {
    // Get the answer from the query string
   var crimeReported = req.session.data['minorCrimeReported']
    if (crimeReported === 'No') {
       return res.redirect('/concepts/minors/reporting-crime-not-reported')
    } else {
      res.redirect('/concepts/minors/who-is-making-the-application')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/minors/incident-reported/', function (req, res) {
    res.render('concepts/minors/incident-reported/index', content)
  })
  //error page
  router.get('/concepts/minors/incident-reported/error', function (req, res) {
    res.render('concepts/minors/incident-reported/error', content)
  })
  // END__######################################################################################################
}
