module.exports = function (router) {
  // START__####################################################################################################
  // File: declaration
  // Variable: declaration

  router.post('/application/declaration', function (req, res) {
    // Get the answer from the query string
    var declaration = req.session.data['declaration']
    //setting the session variable for check your answer page to false
    req.session.checking_answers = false

   // if (declaration === 'no') {
      // Redirect to the relevant page
      //res.redirect('https://www.cica.gov.uk/oas/Account/Create')
    //} else {
      // If the variable is any other value (or is missing) render the page requested
      res.redirect('/application/criminal-convictions')
    //}
  })
  // END__######################################################################################################
}
