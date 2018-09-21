module.exports = function (router) {
  // START__####################################################################################################
  // File: previous-applications
  // Variable: previous-applications

  router.post('/application/previous-applications', function (req, res) {
    // Get the answer from the query string
    var previousApplications = req.session.data['previous-applications']

    if (previousApplications === 'yes')  {
      // Redirect to the relevant page
      res.redirect('/application/previous-not-eligible')
    } else {
      // If the variable is any other value (or is missing) render the page requested
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/application/check-your-answers-page')
      }
      res.redirect('/application/incident-location')
    }
  })
  // END__######################################################################################################
}
