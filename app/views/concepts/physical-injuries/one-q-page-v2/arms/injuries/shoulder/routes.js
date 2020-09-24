module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/arms/injuries/shoulder', function (req, res) {
    let armsInjuredParts = req.session.data['armsInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    // If they pick apple or banana then show them the success page
    if (armsInjuredParts.includes('Wrist')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/arms/injuries/wrist')
    } else if (injuredParts.includes('Head, face or neck')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck')
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
  router.get('/concepts/physical-injuries/one-q-page-v2/arms/injuries/shoulder/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/arms/injuries/shoulder/index', content)
  })
  // END__######################################################################################################
}
