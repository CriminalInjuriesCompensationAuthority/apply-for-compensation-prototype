module.exports = function (router, content) {
  // START__####################################################################################################
  // File: period-of-abuse-start
  //
  router.post('/concepts/minors/period-of-abuse-start', function (req, res) {
    res.redirect('/concepts/minors/period-of-abuse-end')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/period-of-abuse-start/', function (req, res) {
    res.render('concepts/minors/period-of-abuse-start/index', content)
  })

  router.get('/concepts/minors/period-of-abuse-start/error-past', function (req, res) {
    res.render('concepts/minors/period-of-abuse-start/error-past', content)
  })

  router.get('/concepts/minors/period-of-abuse-start/error-before-reported', function (req, res) {
    res.render('concepts/minors/period-of-abuse-start/error-before-reported', content)
  })

  router.get('/concepts/minors/period-of-abuse-start/error-incomplete', function (req, res) {
    res.render('concepts/minors/period-of-abuse-start/error-incomplete', content)
  })
  // END__######################################################################################################
}
