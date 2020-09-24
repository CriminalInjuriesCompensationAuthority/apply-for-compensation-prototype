module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/most-common-first/most-common/', function (req, res) {

      res.redirect('/concepts/physical-injuries/most-common-first/check-injuries')
  })


  // END__######################################################################################################
}
