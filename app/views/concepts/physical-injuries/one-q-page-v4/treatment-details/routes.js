module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v4/treatment-details', function (req, res) {
  // Get the answer from the query string
  var haveDMI = req.session.data['dmiDoYouHave']

  if (haveDMI === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v4/dmi-treatment-types')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v4/finished-treatment')
  }
})

// END__######################################################################################################
}
