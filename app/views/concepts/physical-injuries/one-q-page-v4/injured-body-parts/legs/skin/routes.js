module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/skin', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []

  if (legInjuredParts.includes('Tissue')) {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/tissue')
  } else {
     res.redirect('/concepts/physical-injuries/one-q-page-v4/context-about-dmi/')
  }
})
}
