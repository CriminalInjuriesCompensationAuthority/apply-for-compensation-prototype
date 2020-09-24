module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/most-common-first-v2/most-common/', function (req, res) {

      res.redirect('/concepts/physical-injuries/most-common-first-v2/check-injuries')
  })


  // END__######################################################################################################
}
