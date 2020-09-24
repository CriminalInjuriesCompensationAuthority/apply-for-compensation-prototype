module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/tongue', function (req, res) {

      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/face-surface/')

  })


  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/tongue/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/head-face-neck/injuries/tongue/index', content)
  })
  // END__######################################################################################################
}
