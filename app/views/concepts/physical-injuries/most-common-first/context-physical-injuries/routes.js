module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/most-common-first/context-physical-injuries', function (req, res) {
    res.redirect('/concepts/physical-injuries/most-common-first/have-physical-injuries')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/most-common-first/context-physical-injuries/', function (req, res) {
    res.render('concepts/physical-injuries/most-common-first/context-physical-injuries/index', content)
  })
  // END__######################################################################################################
}
