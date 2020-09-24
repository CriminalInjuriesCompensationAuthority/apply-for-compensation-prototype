module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/application/dmi-finished-treatment', function (req, res) {
  // Get the answer from the query string

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/dmi-more-info')

})

// Pass the question in to the page
router.get('/application/dmi-finished-treatment/', function (req, res) {
  res.render('application/dmi-finished-treatment/index', content)
})


// END__######################################################################################################
}
