module.exports = function (router, content) {
  // START__####################################################################################################
  // File: compensation
  // Variable: otherCompensation

  router.post('/concepts/minors/other-compensation', function (req, res) {
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
    return res.redirect('/concepts/minors/check-your-answers-page')
  }
  res.redirect('/concepts/minors/address-manually')
 })

 // Pass the question in to the page
 router.get('/concepts/minors/other-compensation/', function (req, res) {
   res.render('concepts/minors/other-compensation/index', content)
 })

 // Pass the Error state in to the page when user enters no text in the amount field
 router.get('/concepts/minors/other-compensation/error-amount', function (req, res) {
   res.render('concepts/minors/other-compensation/error-amount', content)
 })

 // Pass the Error state in to the page when user enters no text in source field
 router.get('/concepts/minors/other-compensation/error-who', function (req, res) {
   res.render('concepts/minors/other-compensation/error-who', content)
 })

 // Pass the Error state in to the page when user does not select a radio button
 router.get('/concepts/minors/other-compensation/error-radios', function (req, res) {
   res.render('concepts/minors/other-compensation/error-radios', content)
 })

 // Pass the Error state in to the page when user does not enter a date after selecting no
 router.get('/concepts/minors/other-compensation/error-when', function (req, res) {
   res.render('concepts/minors/other-compensation/error-when', content)
 })
  // END__######################################################################################################
}
