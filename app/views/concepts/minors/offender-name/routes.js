module.exports = function (router, content) {
  // START__####################################################################################################
  // File: offender-name

  router.post('/concepts/minors/offender-name', function (req, res) {
      res.redirect('/concepts/minors/what-is-relationship')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/offender-name/', function (req, res) {
    res.render('concepts/minors/offender-name/index', content)
  })

  // Pass the question in to the error page
  router.get('/concepts/minors/offender-name/error', function (req, res) {
    res.render('concepts/minors/offender-name/error', content)
  })
  // END__######################################################################################################
}
