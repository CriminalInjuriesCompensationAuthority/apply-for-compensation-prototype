module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/knee', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if(legInjuredParts.includes('Ankle')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/ankle')
    } else if (legInjuredParts.includes('Foot')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/foot')
    } else if (legInjuredParts.includes('Toes')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/toes')
    } else if (legInjuredParts.includes('Skin')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/skin')
    } else if (legInjuredParts.includes('Tissue')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/tissue')
      // Go to body part section
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/context-about-dmi/')
    }
  })
  // END__######################################################################################################
}
