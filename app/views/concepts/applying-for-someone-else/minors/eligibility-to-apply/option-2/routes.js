module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen


router.post('/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2', function (req, res) {
  // Get the answer from the query string
  var minorUploadNow = req.session.data['minorUploadNow']

  if (minorUploadNow === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/applying-for-someone-else/minors/single-or-multiple-incidents')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/applying-for-someone-else/minors/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2/upload-choice')
  }
})


// Pass the question in to the page
router.get('/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2/', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2/index', content)
})

router.get('/concepts/applying-for-someone-else/minors/v1/eligibility-error', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/v1/eligibility-error', content)
})

// END__######################################################################################################
}
