module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/other-compensation-provider', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/application/check-your-answers-page')
  }
  res.redirect('/application/other-compensation-decision')
 })

 // Pass the question in to the page
 router.get('/application/other-compensation-provider/', function (req, res) {
   res.render('application/other-compensation-provider/index', content)
 })

 // Pass the Error state in to the page when user enters no text in the amount field
 router.get('/application/other-compensation-provider/error-amount', function (req, res) {
   res.render('application/other-compensation-provider/error-amount', content)
 })

 // Pass the Error state in to the page when user enters no text in source field
 router.get('/application/other-compensation-provider/error-who', function (req, res) {
   res.render('application/other-compensation-provider/error-who', content)
 })

 // Pass the Error state in to the page when user does not select a radio button
 router.get('/application/other-compensation-provider/error-radios', function (req, res) {
   res.render('application/other-compensation-provider/error-radios', content)
 })

 // Pass the Error state in to the page when user does not enter a date after selecting no
 router.get('/application/other-compensation-provider/error-when', function (req, res) {
   res.render('application/other-compensation-provider/error-when', content)
 })
  // END__######################################################################################################
}
