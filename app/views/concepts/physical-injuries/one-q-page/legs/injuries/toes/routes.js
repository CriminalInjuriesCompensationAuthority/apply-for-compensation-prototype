module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/legs/injuries/toes', function (req, res) {
      res.redirect('/concepts/physical-injuries/one-q-page/legs/injuries/surface')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/legs/injuries/toes/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/legs/injuries/toes/index', content)
  })
  // END__######################################################################################################
}
