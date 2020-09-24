module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/pelvis', function (req, res) {
    let torsoInjuredParts = req.session.data['torsoInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (torsoInjuredParts.includes('Genitals')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/torso/genitals')
    } else if (injuredParts.includes('Arms or hands')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/arms/')
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/your-injuries/')
    }
  })
  // END__######################################################################################################
}
