module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/arms/wrist', function (req, res) {
    let armsInjuredParts = req.session.data['armsInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (armsInjuredParts.includes('Hand')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/arms/hand')
    } else if (armsInjuredParts.includes('Finger and thumb')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/arms/finger-thumb')
      // Go to new body part section
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/your-injuries/')
    }
  })
  // END__######################################################################################################
  }
