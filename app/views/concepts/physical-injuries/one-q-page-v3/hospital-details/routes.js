module.exports = function (router, content) {
  // START__####################################################################################################
  // File: address-manually
  // will produce an address on multiple lines on the 'check your answers page'
  router.post('/concepts/physical-injuries/one-q-page-v3/hospital-details', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v3/context-your-money')
  })

  // END__######################################################################################################
}
