module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen


router.post('/concepts/minors/eligibility-to-apply/option-3/upload-choice', function (req, res) {
  // Get the answer from the query string
  var minorUploadChoice = req.session.data['minorUploadChoice']

  if (minorUploadChoice === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/minors/eligibility-to-apply/option-3/upload')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/minors/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/minors/single-or-multiple-incidents')
  }
})


// Pass the question in to the page
router.get('/concepts/minors/eligibility-to-apply/option-3/upload-choice', function (req, res) {
  res.render('concepts/minors/eligibility-to-apply/option-3/upload-choice/index', content)
})

// END__######################################################################################################
}
