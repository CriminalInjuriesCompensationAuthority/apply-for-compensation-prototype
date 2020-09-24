module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthMoreInfo

router.post('/concepts/indicent-type/option-c/incident-description', function (req, res) {
  // Get the answer from the query string
    res.redirect('/concepts/indicent-type/end')
})

// Pass the question in to the page
router.get('/concepts/indicent-type/option-c/incident-description/', function (req, res) {
  res.render('concepts/indicent-type/option-c/incident-description/index', content)
})


// END__######################################################################################################
}
