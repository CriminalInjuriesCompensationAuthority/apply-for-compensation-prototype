module.exports = function (router, content) {
  // START__####################################################################################################
  // File: incident-location
  //
  router.post('/concepts/minors/incident-location', function (req, res) {

    // if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    //   return res.redirect('/concepts/minors/check-your-answers-page')
    // }

  // Get the answer from the query string

      var yourChoice = req.session.data['incidentlocation']

      if (yourChoice === 'England') {
        // Redirect to the relevant page
        res.redirect('/concepts/minors/england-location')
      }
      if (yourChoice === 'Scotland') {
        // Redirect to the relevant page
        res.redirect('/concepts/minors/scotland-location')
      }
      if (yourChoice === 'Wales') {
        // Redirect to the relevant page
        res.redirect('/concepts/minors/wales-location')
      }
      if (yourChoice === 'Somewhere else') {
        // Redirect to the relevant page
        res.redirect('/concepts/minors/somewhere-else')
      }

      })
  // Pass the question in to the page
  router.get('/concepts/minors/incident-location/', function (req, res) {
    res.render('concepts/minors/incident-location/index', content)
  })

  router.get('/concepts/minors/incident-location/error', function (req, res) {
    res.render('concepts/minors/incident-location/error', content)
  })
  // END__######################################################################################################
}
