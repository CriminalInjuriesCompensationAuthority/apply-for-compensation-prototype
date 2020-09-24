module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/arms/injuries/wrist', function (req, res) {
      res.redirect('/concepts/physical-injuries/one-q-page/arms/injuries/surface')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/arms/injuries/wrist/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/arms/injuries/wrist/index', content)
  })
  // END__######################################################################################################
}
