module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/chest', function (req, res) {
    let torsoInjuredParts = req.session.data['torsoInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (torsoInjuredParts.includes('Abdomen')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/abdomen')
    } else if (torsoInjuredParts.includes('Back')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/back')
    } else if (torsoInjuredParts.includes('Pelvis')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/pelvis')
    } else if (torsoInjuredParts.includes('Genitals')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/genitals')
    } else if (torsoInjuredParts.includes('Skin')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/skin')
    } else if (torsoInjuredParts.includes('Tissue')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/tissue')
    } else if (injuredParts.includes('Arms or hands')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/')
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/context-about-dmi/')
    }
  })
  // END__######################################################################################################
}
