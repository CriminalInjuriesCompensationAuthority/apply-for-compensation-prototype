module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v3/returned-work', function (req, res) {
  // Get the answer from the query string
  var returnedToWork = req.session.data['returnedToWork']

  if (returnedToWork === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v3/work-details')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v3/returned-work-date')
  }
})

// END__######################################################################################################
}
