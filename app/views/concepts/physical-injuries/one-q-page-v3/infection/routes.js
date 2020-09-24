module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v3/infection', function (req, res) {
  // Get the answer from the query string
  var haveInfection = req.session.data['haveInfection']

  if (haveInfection === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v3/pregnancy-loss')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v3/infection/details')
  }
})

router.post('/concepts/physical-injuries/one-q-page-v3/infection/details', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v3/pregnancy-loss')
})



// END__######################################################################################################
}
