module.exports = function (router, content) {
  // START__####################################################################################################
  // File: declaration
  // Variable: declaration

  router.post('/concepts/confirmation-choice/v2/declaration', function (req, res) {
    // Get the answer from the query string
    var declaration = req.session.data['declaration']
    //setting the session variable for check your answer page to false
    req.session.checking_answers = false
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/confirmation-choice/v2/british-citizen')
    //}
  })

  // Pass the question in to the page
  router.get('/concepts/confirmation-choice/v2/declaration/', function (req, res) {
    res.render('concepts/confirmation-choice/v2//declaration/index', content)
  })
  // END__######################################################################################################
}
