module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/teeth', function (req, res) {

    let headNeckFaceArea = req.session.data['headNeckFaceArea'] || []

    if (headNeckFaceArea.includes('Tongue')) {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/tongue')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/face-surface/')
    }

  })


  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/teeth/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/head-face-neck/injuries/teeth/index', content)
  })
  // END__######################################################################################################
}
