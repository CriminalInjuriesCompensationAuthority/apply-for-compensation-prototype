module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v2/have-physical-injuries', function (req, res) {
  // Get the answer from the query string
  var havePhysicalInjuries = req.session.data['havePhysicalInjuries']

  if (havePhysicalInjuries === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v2/end')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v2/injured-body-parts')
  }
})

// END__######################################################################################################
}
