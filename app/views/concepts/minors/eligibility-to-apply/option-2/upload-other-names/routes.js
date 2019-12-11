module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen


router.post('/concepts/minors/eligibility-to-apply/option-2/upload-other-names', function (req, res) {
  // Get the answer from the query string

  if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/minors/check-your-answers-page')
    } else {
    res.redirect('/concepts/minors/single-or-multiple-incidents')
  }
})



// Pass the question in to the page
router.get('/concepts/minors/eligibility-to-apply/option-2/upload-other-names', function (req, res) {
  res.render('concepts/minors/eligibility-to-apply/option-2/upload-other-names/index', content)
})

router.get('/concepts/minors/eligibility-to-apply/option-2/upload-other-names/upload-error', function (req, res) {
  res.render('concepts/minors/eligibility-to-apply/option-2/upload-other-names/upload-error', content)
})

// END__######################################################################################################
}
