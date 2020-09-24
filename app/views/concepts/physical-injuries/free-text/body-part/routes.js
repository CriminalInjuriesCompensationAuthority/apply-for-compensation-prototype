module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/free-text/injured-places', function (req, res) {
    res.redirect('/concepts/physical-injuries/free-text/ineligible-injuries/head-face-neck.html')
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/free-text/injured-places/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/injured-places/index', content)
  })
  // END__######################################################################################################
}
