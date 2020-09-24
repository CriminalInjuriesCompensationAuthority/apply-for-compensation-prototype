module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-reported
  // Variable: incidentReported
  router.post('/application/incident-reported', function (req, res) {
    // Get the answer from the query string
   var crimeReported = req.session.data['crimeReported']
    if (crimeReported === 'No') {
       return res.redirect('/application/reporting-crime-not-reported')
    } else {
      res.redirect('/application/context-your-details')
    }
  })

  // Pass the question in to the page
  router.get('/application/incident-reported/', function (req, res) {
    res.render('application/incident-reported/index', content)
  })
  //error page
  router.get('/application/incident-reported/error', function (req, res) {
    res.render('application/incident-reported/error', content)
  })
  // END__######################################################################################################
}
