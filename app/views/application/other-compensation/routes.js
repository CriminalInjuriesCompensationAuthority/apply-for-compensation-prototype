module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/other-compensation', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/name')
 })

 // Pass the question in to the page
 router.get('/application/other-compensation/', function (req, res) {
   res.render('application/other-compensation/index', content)
 })

 // Pass the Error state in to the page when yes is selected but user enters no text in the amount field
 router.get('/application/other-compensation/error-amount', function (req, res) {
   res.render('application/other-compensation/error-amount', content)
 })

 // Pass the Error state in to the page when yes but still waiting is selected but user enters no text in source field
 router.get('/application/other-compensation/error-source', function (req, res) {
   res.render('application/other-compensation/error-source', content)
 })
  // END__######################################################################################################
}
