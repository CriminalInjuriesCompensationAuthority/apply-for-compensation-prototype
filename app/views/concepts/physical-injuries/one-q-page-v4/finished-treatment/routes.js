module.exports = function (router, content) {
// START__####################################################################################################
// File: Mental Health
// Variable: mentalHealth

router.post('/concepts/physical-injuries/one-q-page-v4/finished-treatment', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/gp-registered')

})

// Pass the question in to the page
router.get('/concepts/physical-injuries/one-q-page-v4/finished-treatment/', function (req, res) {
  res.render('concepts/physical-injuries/one-q-page-v4/finished-treatment/index', content)
})


// END__######################################################################################################
}
