module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/minors/authority-to-apply', function (req, res) {
    res.redirect('/concepts/minors/single-or-multiple-incidents')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/authority-to-apply/', function (req, res) {
    res.render('concepts/minors/authority-to-apply/index', content)
  })
  // Pass the question in to the page
  router.get('/concepts/minors/authority-to-apply/error', function (req, res) {
    res.render('concepts/minors/authority-to-apply/error', content)
  })
  // END__######################################################################################################
}
