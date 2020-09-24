module.exports = function (router, content) {
  // START__####################################################################################################
  // File: declaration
  // Variable: declaration

  router.post('/concepts/minors/declaration', function (req, res) {
    // Get the answer from the query string
    var declaration = req.session.data['declaration']
    //setting the session variable for check your answer page to false
    req.session.checking_answers = false
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/minors/sexual-assault-application')
    //}
  })

  // Pass the question in to the page
  router.get('/concepts/minors/declaration/', function (req, res) {
    res.render('concepts/minors/declaration/index', content)
  })
  // END__######################################################################################################
}
