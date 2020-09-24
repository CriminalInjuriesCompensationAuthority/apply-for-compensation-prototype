module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/basic-autocomplete/context-physical-injuries', function (req, res) {
    res.redirect('/concepts/physical-injuries/basic-autocomplete/have-physical-injuries')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/basic-autocomplete/context-physical-injuries/', function (req, res) {
    res.render('concepts/physical-injuries/basic-autocomplete/context-physical-injuries/index', content)
  })
  // END__######################################################################################################
}
