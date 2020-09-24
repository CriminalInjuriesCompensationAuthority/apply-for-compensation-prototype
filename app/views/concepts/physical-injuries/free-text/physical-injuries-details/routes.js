module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/free-text/physical-injuries-details', function (req, res) {
    res.redirect('/concepts/physical-injuries/free-text/your-injuries')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/free-text/physical-injuries-details/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/physical-injuries-details/index', content)
  })
  // END__######################################################################################################
}
