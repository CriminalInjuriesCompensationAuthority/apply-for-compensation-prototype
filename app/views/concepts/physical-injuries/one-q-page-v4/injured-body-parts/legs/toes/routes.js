module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/toes', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []

    if (legInjuredParts.includes('Skin')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/skin')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/your-injuries/')
    }
  })
}