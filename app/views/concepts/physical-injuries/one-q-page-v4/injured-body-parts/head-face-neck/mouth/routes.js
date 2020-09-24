module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/mouth', function (req, res) {
    let headFaceNeckInjuredParts = req.session.data['headFaceNeckInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (headFaceNeckInjuredParts.includes('Neck')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/neck/')
    } else if (headFaceNeckInjuredParts.includes('Skin')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/skin/')
    } else if (headFaceNeckInjuredParts.includes('Tissue')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/tissue/')
    } else if (injuredParts.includes('Torso')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/torso/')
    } else if (injuredParts.includes('Arms or hands')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/arms/')
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/context-about-dmi/')
    }
  })
}
