module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/head-brain', function (req, res) {

    let headNeckFaceInjuredPart = req.session.data['headNeckFaceInjuredPart'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    // If head or brain then go to the surface injuries
    if (headNeckFaceInjuredPart.includes('Neck')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/neck-surface/')
      // If face then go to the surface injuries
    } else if (headNeckFaceInjuredPart.includes('Face')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/face-surface/')
      // Go to detail
    } else if (headNeckFaceInjuredPart.includes('Ear or hearing')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/ear-hearing/')
      // Go to detail
    } else if (headNeckFaceInjuredPart.includes('Eye or eyesight')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/eye-sight/')
      // Go to detail
    } else if (headNeckFaceInjuredPart.includes('Nose')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/nose/')
      // Go to detail
    } else if (headNeckFaceInjuredPart.includes('Teeth')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/teeth/')
      // Go to body part section
    } else if (headNeckFaceInjuredPart.includes('Tongue')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/tongue/')
      // Go to new body part section
    } else if (injuredParts.includes('Legs')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/')
    } else if (injuredParts.includes('Torso')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/torso/')
    } else {
      // Go to end
      res.redirect('/concepts/physical-injuries/one-q-page-v2/other-injuries-details')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/head-brain/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/head-brain/index', content)
  })
  // END__######################################################################################################
}
