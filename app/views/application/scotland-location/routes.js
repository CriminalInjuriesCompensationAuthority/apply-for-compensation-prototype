module.exports = function (router, content) {
  // START__####################################################################################################
  // File: scotland-location
  //

  router.post('/application/scotland-location', function (req, res) {
    // Get the answer from the query string
    var crimeReported = req.session.data['crimeReported']

    if (crimeReported === 'No')  {
      // Redirect to the relevant page
      res.redirect('/application/context-contact-with-offender')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/crime-reported-date')
    }
  })


  // Pass the question in to the page
  router.get('/application/scotland-location/', function (req, res) {
    res.render('application/scotland-location/index', content)
  })

  router.get('/application/scotland-location/error-town', function (req, res) {
    res.render('application/scotland-location/error-town', content)
  })

  router.get('/application/scotland-location/error-location', function (req, res) {
    res.render('application/scotland-location/error-location', content)
  })
  // END__######################################################################################################
}
