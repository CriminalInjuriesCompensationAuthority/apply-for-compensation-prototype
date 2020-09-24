module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/application/reporting-details-what-force-manual', function (req, res) {
  // Get the answer from the query string
  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requesteds
    res.redirect('/application/do-you-know-offender-name')

})

// Pass the question in to the page
router.get('/application/reporting-details-what-force-manual', function (req, res) {
  res.render('application/reporting-details-what-force-manual/index', content)
})

// END__######################################################################################################
}
