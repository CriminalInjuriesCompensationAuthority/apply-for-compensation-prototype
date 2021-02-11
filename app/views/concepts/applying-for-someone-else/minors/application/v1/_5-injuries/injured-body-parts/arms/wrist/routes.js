module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/wrist', function (req, res) {
    let armsInjuredParts = req.session.data['armsInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (armsInjuredParts.includes('Hand')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/hand')
    } else if (armsInjuredParts.includes('Finger and thumb')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/finger-thumb')
    } else if (armsInjuredParts.includes('Skin')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/skin')
    } else if (armsInjuredParts.includes('Tissue')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/tissue')
      // Go to new body part section
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/')
    } else {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-about-dmi/')
    }
  })
  // END__######################################################################################################
  }
