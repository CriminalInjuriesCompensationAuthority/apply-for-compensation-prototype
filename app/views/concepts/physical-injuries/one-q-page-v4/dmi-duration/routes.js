module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealthDuration

router.post('/concepts/physical-injuries/one-q-page-v4/dmi-duration', function (req, res) {
  res.redirect('/concepts/physical-injuries/one-q-page-v4/how-it-affected-you')
})

// Pass the question in to the page
router.get('/concepts/physical-injuries/one-q-page-v4/dmi-duration/', function (req, res) {
  res.render('concepts/physical-injuries/one-q-page-v4/dmi-duration/index', content)
})

router.get('/concepts/physical-injuries/one-q-page-v4/dmi-duration/dmi-duration-error', function (req, res) {
  res.render('concepts/physical-injuries/one-q-page-v4/dmi-duration/dmi-duration-error', content)
})

// END__######################################################################################################
}
