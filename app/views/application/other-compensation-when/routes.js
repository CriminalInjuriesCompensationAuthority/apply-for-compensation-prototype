module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/application/other-compensation-when', function (req, res) {
    res.redirect('/application/check-your-answers-page')
 })

 // Pass the question in to the page
 router.get('/application/other-compensation-when/', function (req, res) {
   res.render('application/other-compensation-when/index', content)
 })

 // Pass the Error state in to the page when user enters no text in the amount field
 router.get('/application/other-compensation-when/error-amount', function (req, res) {
   res.render('application/other-compensation-when/error-amount', content)
 })

 // Pass the Error state in to the page when user enters no text in source field
 router.get('/application/other-compensation-when/error-who', function (req, res) {
   res.render('application/other-compensation-when/error-who', content)
 })

 // Pass the Error state in to the page when user does not select a radio button
 router.get('/application/other-compensation-when/error-radios', function (req, res) {
   res.render('application/other-compensation-when/error-radios', content)
 })

 // Pass the Error state in to the page when user does not enter a date after selecting no
 router.get('/application/other-compensation-when/error-when', function (req, res) {
   res.render('application/other-compensation-when/error-when', content)
 })
  // END__######################################################################################################
}
