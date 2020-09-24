module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/injured-body-parts', function (req, res) {
    let injuredParts = req.session.data['injuredParts'] || []

    // If they pick apple or banana then show them the success page
     if (injuredParts.includes('Arms')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/arms/')
    } else if (injuredParts.includes('Head, face or neck')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck')
    } else if (injuredParts.includes('Legs')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/')
    } else if (injuredParts.includes('Torso')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/torso/')
    }
  })


  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/injured-body-parts/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/injured-body-parts/index', content)
  })
  // END__######################################################################################################
}
