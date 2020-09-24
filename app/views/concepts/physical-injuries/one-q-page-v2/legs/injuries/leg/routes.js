module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/legs/injuries/leg', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (legInjuredParts.includes('Toes')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/injuries/toes')
      // Go to body part section
    } else if (injuredParts.includes('Torso')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/torso/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/other-injuries-details')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/legs/injuries/leg/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/legs/injuries/leg/index', content)
  })
  // END__######################################################################################################
}
