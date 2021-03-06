module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/legs/injuries/toes', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    // Go to new body part section
  if (injuredParts.includes('Torso')) {
    res.redirect('/concepts/physical-injuries/one-q-page-v2/torso/')
  } else {
    // Go to end
    res.redirect('/concepts/physical-injuries/one-q-page-v2/other-injuries-details')
  }
})

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/legs/injuries/toes/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/legs/injuries/toes/index', content)
  })
  // END__######################################################################################################
}
