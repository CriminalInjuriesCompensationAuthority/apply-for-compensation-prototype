module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/arms/injuries/finger-thumb', function (req, res) {
    let armsInjuredParts = req.session.data['armsInjuredParts'] || []

    // If they pick apple or banana then show them the success page
    if (armsInjuredParts.includes('Hand')) {
      res.redirect('/concepts/physical-injuries/one-q-page/arms/injuries/hand')
    } else if (armsInjuredParts.includes('Shoulder')) {
      res.redirect('/concepts/physical-injuries/one-q-page/arms/injuries/shoulder')
    } else if (armsInjuredParts.includes('Wrist')) {
      res.redirect('/concepts/physical-injuries/one-q-page/arms/injuries/wrist')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page/arms/injuries/surface')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/arms/injuries/finger-thumb/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/arms/injuries/finger-thumb/index', content)
  })
  // END__######################################################################################################
}
