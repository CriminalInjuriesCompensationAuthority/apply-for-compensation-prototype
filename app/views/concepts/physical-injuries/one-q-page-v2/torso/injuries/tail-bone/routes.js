module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/torso/injuries/tail-bone', function (req, res) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/other-injuries-details')
    })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/torso/injuries/tail-bone/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/torso/injuries/tail-bone/index', content)
  })
  // END__######################################################################################################
}
