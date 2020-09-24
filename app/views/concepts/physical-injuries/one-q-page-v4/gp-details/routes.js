module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/concepts/physical-injuries/one-q-page-v4/gp-details', function (req, res) {

    let injuredParts = req.session.data['injuredParts']

    if (injuredParts.includes('Head, face or neck')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/dentist-visited')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/context-your-money')
    }
  })



  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v4/gp-details/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v4/gp-details/index', content)
  })

  // END__######################################################################################################
}
