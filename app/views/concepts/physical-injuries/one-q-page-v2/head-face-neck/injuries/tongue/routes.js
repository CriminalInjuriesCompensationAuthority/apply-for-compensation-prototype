module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/tongue', function (req, res) {

    let headNeckFaceInjuredPart = req.session.data['headNeckFaceInjuredPart'] || []
    let injuredParts = req.session.data['injuredParts'] || []

    // Go to new body part section
  if (injuredParts.includes('Legs')) {
    res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/')
  } else if (injuredParts.includes('Torso')) {
    res.redirect('/concepts/physical-injuries/one-q-page-v2/torso/')
  } else {
    // Go to end
    res.redirect('/concepts/physical-injuries/one-q-page-v2/other-injuries-details')
  }
})


  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/tongue/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/tongue/index', content)
  })
  // END__######################################################################################################
}
