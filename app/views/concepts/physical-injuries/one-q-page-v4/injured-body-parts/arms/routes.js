module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/', function (req, res) {
    let armsInjuredParts = req.session.data['armsInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (armsInjuredParts.includes('Shoulder')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/shoulder')
    } else if (armsInjuredParts.includes('Arm')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/arm')
    } else if (armsInjuredParts.includes('Elbow')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/elbow')
    } else if (armsInjuredParts.includes('Wrist')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/wrist')
    } else if (armsInjuredParts.includes('Hand')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/hand')
    } else if (armsInjuredParts.includes('Finger and thumb')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/finger-thumb')
    } else if (armsInjuredParts.includes('Skin')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/skin')
    } else if (armsInjuredParts.includes('Tissue')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/tissue')
      // Go to new body part section
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/context-about-dmi/')
    }
  })
  // END__######################################################################################################
}
