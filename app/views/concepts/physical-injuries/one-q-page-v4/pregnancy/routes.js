module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v4/pregnancy', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/pregnancy/loss')
})

router.post('/concepts/physical-injuries/one-q-page-v4/pregnancy/loss', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v4/have-physical-injuries')
})

// END__######################################################################################################
}
