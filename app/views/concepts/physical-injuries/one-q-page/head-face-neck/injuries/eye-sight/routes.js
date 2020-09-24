module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/eye-sight', function (req, res) {

    let headNeckFaceArea = req.session.data['headNeckFaceArea'] || []

    // If they pick apple or banana then show them the success page
    if (headNeckFaceArea.includes('Face')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/face')
    } else if (headNeckFaceArea.includes('Nose')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/nose')
    } else if (headNeckFaceArea.includes('Teeth')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/teeth')
    } else if (headNeckFaceArea.includes('Tongue')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/tongue')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/face-surface/')
    }

  })


  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/eye-sight/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/head-face-neck/injuries/eye-sight/index', content)
  })
  // END__######################################################################################################
}
