module.exports = function (router, content) {

router.post('/concepts/physical-injuries/free-text/have-other-injuries', function (req, res) {
  // Get the answer from the query string
  var haveOtherInjuries = req.session.data['haveOtherInjuries']

  if (haveOtherInjuries === 'no') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/free-text/end')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/free-text/physical-injuries-details')
  }
})

// END__######################################################################################################
}
