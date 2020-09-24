module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/arms/injuries/arm', function (req, res) {
    let armsInjuredParts = req.session.data['armsInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    // If they pick apple or banana then show them the success page
    if (armsInjuredParts.includes('Elbow')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/arms/injuries/elbow')
    } else if (armsInjuredParts.includes('Finger and thumb')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/arms/injuries/finger-thumb')
    } else if (armsInjuredParts.includes('Hand')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/arms/injuries/hand')
    } else if (armsInjuredParts.includes('Shoulder')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/arms/injuries/shoulder')
    } else if (armsInjuredParts.includes('Wrist')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/arms/injuries/wrist')
      // Go to new body part section
    } else if (injuredParts.includes('Head, face or neck')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/')
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
  router.get('/concepts/physical-injuries/one-q-page-v2/arms/injuries/arm/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/arms/injuries/arm/index', content)
  })
  // END__######################################################################################################
}
