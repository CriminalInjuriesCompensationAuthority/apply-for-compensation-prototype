module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v4/infection', function (req, res) {
  // Get the answer from the query string
  var haveInfection = req.session.data['haveInfection']

  if (haveInfection === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v4/pregnancy')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v4/infection/details')
  }
})

router.post('/concepts/physical-injuries/one-q-page-v4/infection/vosaa', function (req, res) {
  // Get the answer from the query string
  var haveInfection = req.session.data['haveInfection']

  if (haveInfection === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v4/pregnancy')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v4/infection/details-vosaa')
  }
})

router.post('/concepts/physical-injuries/one-q-page-v4/infection/details', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/pregnancy')
})

router.post('/concepts/physical-injuries/one-q-page-v4/infection/details-vosaa', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/pregnancy')
})

// END__######################################################################################################
}
