module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/free-text/non-specific', function (req, res) {
    res.redirect('/concepts/physical-injuries/free-text/injured-parts/')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/free-text/non-specific/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/non-specific/index', content)
  })
  // END__######################################################################################################
}
