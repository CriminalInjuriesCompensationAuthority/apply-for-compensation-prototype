module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/skin', function (req, res) {
    let armsInjuredParts = req.session.data['armsInjuredParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    if (armsInjuredParts.includes('Tissue')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/tissue')
    } else if (injuredParts.includes('Legs or feet')) {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/')
    } else {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/')
    }
  })
}
