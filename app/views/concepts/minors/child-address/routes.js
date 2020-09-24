module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen

router.post('/concepts/minors/child-address', function (req, res) {
  // Get the answer from the query string
  var minorAlsoChildAddress = req.session.data['minorAlsoChildAddress']

  if (minorAlsoChildAddress === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/minors/email-address')
  } else {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/minors/check-your-answers-page')
    }
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/minors/child-address-manually')
  }
})

// Pass the question in to the page
router.get('/concepts/minors/child-address/', function (req, res) {
  res.render('concepts/minors/child-address/index', content)
})

router.get('/concepts/minors/child-address/child-address-error', function (req, res) {
  res.render('concepts/minors/child-address/child-address-error', content)
})

// END__######################################################################################################
}
