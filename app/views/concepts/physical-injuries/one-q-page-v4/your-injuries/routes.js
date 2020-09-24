module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v4/your-injuries', function (req, res) {
  // Get the answer from the query string
  var yourInjuriesCorrect = req.session.data['yourInjuriesCorrect']

  if (yourInjuriesCorrect === 'No') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v4/context-about-dmi')
  } else {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts')
  }
})

// END__######################################################################################################
}
