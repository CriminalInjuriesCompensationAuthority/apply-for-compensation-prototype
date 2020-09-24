module.exports = function (router, content) {

  router.post('/concepts/physical-injuries/most-common-first-v2/your-injuries', function (req, res) {
  // Get the answer from the query string
  var otherInjuries = req.session.data['otherInjuries']
  let mostCommonInjuries = req.session.data['mostCommonInjuries'] || []

  if (otherInjuries === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v2/injured-body-parts')
    // Go to new body part section
  } else {
    res.redirect('/concepts/physical-injuries/most-common-first-v2/end')
  }
})

// END__######################################################################################################
}
