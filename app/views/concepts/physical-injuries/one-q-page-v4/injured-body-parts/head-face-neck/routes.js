module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck', function (req, res) {
    let headFaceNeckInjuredParts = req.session.data['headFaceNeckInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

     if (headFaceNeckInjuredParts.includes('Head or brain')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/head')
    } else if (headFaceNeckInjuredParts.includes('Face or jaw')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/face/')
    } else if (headFaceNeckInjuredParts.includes('Eye or eyesight')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/eye-sight/')
    } else if (headFaceNeckInjuredParts.includes('Ear or hearing')) {
     res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/ear-hearing/')
    } else if (headFaceNeckInjuredParts.includes('Nose')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/nose/')
    } else if (headFaceNeckInjuredParts.includes('Mouth')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/head-face-neck/mouth/')
    } else if (headFaceNeckInjuredParts.includes('Neck')) {
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
