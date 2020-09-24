module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/advanced-autocomplete/have-physical-injuries', function (req, res) {
    res.redirect('/concepts/physical-injuries/advanced-autocomplete/advanced.html')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/advanced-autocomplete/have-physical-injuries/', function (req, res) {
    res.render('concepts/physical-injuries/advanced-autocomplete/have-physical-injuries/index', content)
  })
  // END__######################################################################################################
}
