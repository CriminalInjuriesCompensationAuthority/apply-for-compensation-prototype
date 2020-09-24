module.exports = function (router, content) {
  // START__####################################################################################################
  // File: what-is-relationship
  //
  router.post('/concepts/minors/what-is-relationship', function (req, res) {

    if(req.session.checking_answers) {
      return res.redirect('/concepts/minors/check-your-answers-page')
    }
    res.redirect('/concepts/minors/previous-applications')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/what-is-relationship/', function (req, res) {
    res.render('concepts/minors/what-is-relationship/index', content)
  })

  // Pass the question in to the page
  router.get('/concepts/minors/what-is-relationship/error', function (req, res) {
    res.render('concepts/minors/what-is-relationship/error', content)
  })
  // END__######################################################################################################
}
