module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-location
  //
  router.post('/application/incident-location', function (req, res) {

    // if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    //   return res.redirect('/application/check-your-answers-page')
    // }

  // Get the answer from the query string

      var yourChoice = req.session.data['incidentlocation']

      if (yourChoice === 'England') {
        // Redirect to the relevant page
        res.redirect('/application/england-location')
      }
        if (yourChoice === 'Scotland') {
          // Redirect to the relevant page
          res.redirect('/application/scotland-location')
        }
          if (yourChoice === 'Wales') {
            // Redirect to the relevant page
            res.redirect('/application/wales-location')
          }

          if (yourChoice === 'somewhere-else') {
            // Redirect to the relevant page
            res.redirect('/application/somewhere-else')
          }

      })
  // Pass the question in to the page
  router.get('/application/incident-location/', function (req, res) {
    res.render('application/incident-location/index', content)
  })

  router.get('/application/incident-location/error', function (req, res) {
    res.render('application/incident-location/error', content)
  })
  // END__######################################################################################################
}
