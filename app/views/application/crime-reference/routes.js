module.exports = function (router) {
  // START__####################################################################################################
  // File: crime-reference
  //
  router.post('/application/crime-reference', function (req, res) {
   if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
     return res.redirect('/application/check-your-answers-page')
   }
   res.redirect('/application/single-or-multiple-incidents')
  })

  // Pass the question in to the page
  router.get('/application/crime-reference/', function (req, res) {
    res.render('application/crime-reference/index', { 'crimeReferenceNumberQuestion': 'What\'s the crime reference number?' })
  })
  // END__######################################################################################################
}
