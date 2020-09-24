module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDiagnosis

router.post('/concepts/physical-injuries/one-q-page-v3/dmi-treatment-types', function (req, res) {
  // Get the answer from the query string

    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/physical-injuries/one-q-page-v3/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v3/dmi-finished-treatment')

})

// Pass the question in to the page
router.get('/concepts/physical-injuries/one-q-page-v3/dmi-treatment-types/', function (req, res) {
  res.render('application/dmi-treatment-types/index', content)
})

// END__######################################################################################################
}
