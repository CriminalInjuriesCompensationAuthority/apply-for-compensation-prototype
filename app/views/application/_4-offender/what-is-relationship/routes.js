module.exports = function (router, content) {
  // START__####################################################################################################
  // File: what-is-relationship
  //
  router.post('/application/_4-offender/what-is-relationship', function (req, res) {

    if(req.session.checking_answers) {
      return res.redirect('/application/_10-end/check-your-answers-page')
    }
    res.redirect('/application/_5-injuries/context-physical-injuries')
  })

  // Pass the question in to the page
  router.get('/application/_4-offender/what-is-relationship/', function (req, res) {
    res.render('application/_4-offender/what-is-relationship/index', content)
  })

  // Pass the question in to the page
  router.get('/application/_4-offender/what-is-relationship/error', function (req, res) {
    res.render('application/_4-offender/what-is-relationship/error', content)
  })
  // END__######################################################################################################
}
