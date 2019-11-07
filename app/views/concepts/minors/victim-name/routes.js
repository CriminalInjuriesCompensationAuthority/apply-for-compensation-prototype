module.exports = function (router, content) {
  // START__####################################################################################################
  // File: victim-name
  //
  router.post('/concepts/minors/victim-name', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/concepts/minors/check-your-answers-page')
    }
    res.redirect('/concepts/minors/victim-name-have-other')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/victim-name/', function (req, res) {
    res.render('concepts/minors/victim-name/index', content)
  })

  router.get('/concepts/minors/victim-name/error-no-title', function (req, res) {
    res.render('concepts/minors/victim-name/error-no-title', content)
  })

  router.get('/concepts/minors/victim-name/error-no-first-name', function (req, res) {
    res.render('concepts/minors/victim-name/error-no-first-name', content)
  })

  router.get('/concepts/minors/victim-name/error-no-last-name', function (req, res) {
    res.render('concepts/minors/victim-name/error-no-last-name', content)
  })
  // END__######################################################################################################
}
