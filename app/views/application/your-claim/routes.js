module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: Your Claim : routing people with physical injuries or other costs to the old service

  router.post('/application/your-claim', function (req, res) {
    // Get the answer from the query string
    // Make a variable and give it the value from 'how-many-balls'
      var option2 = req.session.data['yourClaimOption2s']

    // Check whether the variable matches a condition
      if (option2  === 'No') {
        // Send user to next page
        res.redirect('/application/context-about-dmi')
      }
      else {
        // Send user to ineligible page
        res.redirect('/application/your-claim/transition')
      }
  })


  router.post('/application/your-claim', function (req, res) {
    res.redirect('/application/context-about-dmi')
  })

  // Pass the question in to the page
  router.get('/application/your-claim/', function (req, res) {
    res.render('application/your-claim/index', content)
  })

  // S
  router.get('/application/your-claim/transition', function (req, res) {
    res.render('application/your-claim/transition', content)
  })

  // END__######################################################################################################
}
