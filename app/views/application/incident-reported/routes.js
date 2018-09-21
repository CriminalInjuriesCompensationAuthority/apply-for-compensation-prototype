module.exports = function (router) {
  // START__####################################################################################################
  // File: incident-reported
  // Variable: incidentReported
  router.post('/application/incident-reported', function (req, res) {
    // Get the answer from the query string
   var crimeReported = req.session.data['crimeReported']
    if (crimeReported === 'no') {
       return res.redirect('/application/reporting-crime-not-reported')
    } else {
      res.redirect('/application/crime-reported-date')
    }
  })
  // END__######################################################################################################
}
