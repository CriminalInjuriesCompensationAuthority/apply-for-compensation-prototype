module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/head-surface/', function (req, res) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/head-face-neck/injuries/head-brain')
  })


  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/head-face-neck/head-surface/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/head-face-neck/head-surface/index', content)
  })
  // END__######################################################################################################
}
