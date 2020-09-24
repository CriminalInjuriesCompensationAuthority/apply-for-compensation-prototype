module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/torso/injuries/tail-bone', function (req, res) {
      res.redirect('/concepts/physical-injuries/one-q-page/torso/injuries/surface')
    })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/torso/injuries/tail-bone/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/torso/injuries/tail-bone/index', content)
  })
  // END__######################################################################################################
}
