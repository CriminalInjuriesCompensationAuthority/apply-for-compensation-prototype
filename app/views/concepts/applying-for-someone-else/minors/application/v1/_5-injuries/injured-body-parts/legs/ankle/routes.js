module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/ankle', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if(legInjuredParts.includes('Foot')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/foot')
    } else if (legInjuredParts.includes('Toes')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/toes')
    } else if (legInjuredParts.includes('Skin')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/skin')
    } else if (legInjuredParts.includes('Tissue')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/tissue')
    } else {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/')
    }
  })
  // END__######################################################################################################
}
