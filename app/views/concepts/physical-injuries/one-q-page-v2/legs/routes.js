module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/legs', function (req, res) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/legs/injuries/surface')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/legs/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/legs/index', content)
  })
  // END__######################################################################################################
}
