module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-location
  //
  router.post('/concepts/forces-mockups/v1/incident-location', function (req, res) {

    // if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    //   return res.redirect('/concepts/forces-mockups/v1/check-your-answers-page')
    // }

  // Get the answer from the query string

      var yourChoice = req.session.data['incidentlocation']

      if (yourChoice === 'England') {
        // Redirect to the relevant page
        res.redirect('/concepts/forces-mockups/v1/england-location')
      }
        if (yourChoice === 'Scotland') {
          // Redirect to the relevant page
          res.redirect('/concepts/forces-mockups/v1/scotland-location')
        }
          if (yourChoice === 'Wales') {
            // Redirect to the relevant page
            res.redirect('/concepts/forces-mockups/v1/wales-location')
          }

          if (yourChoice === 'Somewhere else') {
            // Redirect to the relevant page
            res.redirect('/concepts/forces-mockups/v1/somewhere-else')
          }

      })
  // Pass the question in to the page
  router.get('/concepts/forces-mockups/v1/incident-location/', function (req, res) {
    res.render('concepts/forces-mockups/v1/incident-location/index', content)
  })

  router.get('/concepts/forces-mockups/v1/incident-location/error', function (req, res) {
    res.render('concepts/forces-mockups/v1/incident-location/error', content)
  })
  // END__######################################################################################################
}
