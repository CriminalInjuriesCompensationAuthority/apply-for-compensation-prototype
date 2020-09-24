module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (legInjuredParts.includes('Hip')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/hip')
    } else if (legInjuredParts.includes('Leg')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/leg')
    } else if (legInjuredParts.includes('Knee')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/knee')
    } else if(legInjuredParts.includes('Ankle')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/ankle')
    } else if(legInjuredParts.includes('Foot')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/foot')
    } else if (legInjuredParts.includes('Toes')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/injured-body-parts/legs/toes')
      // Go to body part section
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/your-injuries/')
    }
  })
  // END__######################################################################################################
}
