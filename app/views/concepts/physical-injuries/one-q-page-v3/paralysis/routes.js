module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v3/paralysis', function (req, res) {
  // Get the answer from the query string
  var haveParalysis = req.session.data['haveParalysis']

  if (haveParalysis === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v3/infection')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v3/paralysis/details')
  }
})


router.post('/concepts/physical-injuries/one-q-page-v3/paralysis/details', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v3/infection')
})

// END__######################################################################################################
}
