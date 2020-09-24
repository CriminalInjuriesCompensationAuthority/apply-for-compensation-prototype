module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/concepts/physical-injuries/one-q-page-v3/gp-details', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v3/context-your-money')
  })


  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v3/gp-details/', function (req, res) {
    res.render('application/gp-details/index', content)
  })

  // END__######################################################################################################
}
