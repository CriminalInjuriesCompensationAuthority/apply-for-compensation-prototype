module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v4/injured-body-parts/legs/skin', function (req, res) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/your-injuries/')
  })
}
