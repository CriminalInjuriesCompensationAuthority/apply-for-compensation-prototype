module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/neck', function (req, res) {

      res.redirect('/concepts/physical-injuries/one-q-page/head-face-neck/neck-surface')

  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/head-face-neck/injuries/neck/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/head-face-neck/injuries/neck/index', content)
  })
  // END__######################################################################################################
}
