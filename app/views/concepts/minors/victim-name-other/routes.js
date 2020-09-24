module.exports = function (router, content) {
  // START__####################################################################################################
  // File: name-other
  //
  router.post('/concepts/minors/victim-name-other', function (req, res) {
    res.redirect('/concepts/minors/care-order')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/victim-name-other/', function (req, res) {
    res.render('concepts/minors/victim-name-other/index', content)
  })
  // Pass the question in to the page
  router.get('/concepts/minors/victim-name-other/error', function (req, res) {
    res.render('concepts/minors/victim-name-other/error', content)
  })
  // END__######################################################################################################
}
