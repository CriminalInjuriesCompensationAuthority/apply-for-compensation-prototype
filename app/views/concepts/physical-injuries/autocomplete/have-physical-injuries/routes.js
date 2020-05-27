module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/autocomplete/have-physical-injuries', function (req, res) {
    res.redirect('/concepts/physical-injuries/autocomplete/advanced.html')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/autocomplete/have-physical-injuries/', function (req, res) {
    res.render('concepts/physical-injuries/autocomplete/have-physical-injuries/index', content)
  })
  // END__######################################################################################################
}
