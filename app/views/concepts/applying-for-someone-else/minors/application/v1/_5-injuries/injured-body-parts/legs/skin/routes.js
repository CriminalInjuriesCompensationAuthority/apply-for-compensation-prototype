module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/skin', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []

  if (legInjuredParts.includes('Tissue')) {
    res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/tissue')
  } else {
     res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/')
  }
})
}
