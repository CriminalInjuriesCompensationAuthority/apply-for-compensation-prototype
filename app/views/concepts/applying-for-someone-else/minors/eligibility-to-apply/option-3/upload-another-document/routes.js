module.exports = function (router, content) {
// START__####################################################################################################
// File: british-citizen
// Variable: britishCitizen


router.post('/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload-another-document', function (req, res) {
  // Get the answer from the query string

  res.redirect('/concepts/applying-for-someone-else/minors/single-or-multiple-incidents')
  
})



// Pass the question in to the page
router.get('/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload-another-document', function (req, res) {
  res.render('concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload-another-document/index', content)
})


// END__######################################################################################################
}
