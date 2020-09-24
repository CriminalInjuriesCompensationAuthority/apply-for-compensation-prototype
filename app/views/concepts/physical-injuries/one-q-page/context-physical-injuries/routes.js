module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/context-physical-injuries', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page/have-physical-injuries')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/context-physical-injuries/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/context-physical-injuries/index', content)
  })
  // END__######################################################################################################
}
