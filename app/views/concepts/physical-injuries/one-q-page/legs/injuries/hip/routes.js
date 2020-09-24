module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/legs/injuries/hip', function (req, res) {
    let legInjuredParts = req.session.data['legInjuredParts'] || []

    // If they pick apple or banana then show them the success page
    if (legInjuredParts.includes('Knee')) {
      res.redirect('/concepts/physical-injuries/one-q-page/legs/injuries/knee')
    } else if (legInjuredParts.includes('Leg')) {
      res.redirect('/concepts/physical-injuries/one-q-page/legs/injuries/leg')
    } else if (legInjuredParts.includes('Toes')) {
      res.redirect('/concepts/physical-injuries/one-q-page/legs/injuries/toes')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page/legs/injuries/surface')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/legs/injuries/hip/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/legs/injuries/hip/index', content)
  })
  // END__######################################################################################################
}
