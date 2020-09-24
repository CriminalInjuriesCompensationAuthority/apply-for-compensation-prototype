module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v3/loss-earnings-claim', function (req, res) {
  // Get the answer from the query string
  var lossEarningsClaim = req.session.data['lossEarningsClaim']

  if (lossEarningsClaim === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v3/special-expenses')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v3/returned-work')
  }
})

// END__######################################################################################################
}
