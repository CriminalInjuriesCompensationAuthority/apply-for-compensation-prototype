module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v2/your-injuries', function (req, res) {
  // Get the answer from the query string
  var yourInjuriesCorrect = req.session.data['yourInjuriesCorrect']

  if (yourInjuriesCorrect === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v2/injured-body-parts')
  } else {
    res.redirect('/concepts/physical-injuries/one-q-page-v2/end')
  }
})

// END__######################################################################################################
}
