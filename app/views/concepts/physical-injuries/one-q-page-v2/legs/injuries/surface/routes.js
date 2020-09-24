module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/legs/injuries/surface', function (req, res) {

    let legInjuredParts = req.session.data['legInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    let numLegInjuredParts = 1

    // If they pick apple or banana then show them the success page
    if (legInjuredParts.includes('Ankle')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/injuries/ankle')
    } else if(legInjuredParts.includes('Foot')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/injuries/foot')
    } else if (legInjuredParts.includes('Hip')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/injuries/hip')
    } else if (legInjuredParts.includes('Knee')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/injuries/knee')
    } else if (legInjuredParts.includes('Leg')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/injuries/leg')
    } else if (legInjuredParts.includes('Toes')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/injuries/toes')
      // Go to body part section
    } else if (injuredParts.includes('Torso')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/torso/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/other-injuries-details')
    }

  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/legs/injuries/surface/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/legs/injuries/surface/index', content)
  })
  // END__######################################################################################################
}
