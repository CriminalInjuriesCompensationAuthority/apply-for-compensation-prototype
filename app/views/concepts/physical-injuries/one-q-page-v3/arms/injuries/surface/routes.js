module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v3/arms/injuries/surface', function (req, res) {

    let armsInjuredParts = req.session.data['armsInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (armsInjuredParts.includes('Arm')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/arms/injuries/arm')
    } else if (armsInjuredParts.includes('Elbow')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/arms/injuries/elbow')
    } else if (armsInjuredParts.includes('Finger and thumb')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/arms/injuries/finger-thumb')
    } else if (armsInjuredParts.includes('Hand')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/arms/injuries/hand')
    } else if (armsInjuredParts.includes('Shoulder')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/arms/injuries/shoulder')
    } else if (armsInjuredParts.includes('Wrist')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/arms/injuries/wrist')
      // Go to new body part section
    } else if (injuredParts.includes('Head, face or neck')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/head-face-neck/')
    } else if (injuredParts.includes('Legs')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/legs/')
    } else if (injuredParts.includes('Torso')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/torso/')
    } else {
      // Go to end
      res.redirect('/concepts/physical-injuries/one-q-page-v3/other-injuries-details')
    }
  })


  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v3/arms/injuries/surface/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v3/arms/injuries/surface/index', content)
  })
  // END__######################################################################################################
}
