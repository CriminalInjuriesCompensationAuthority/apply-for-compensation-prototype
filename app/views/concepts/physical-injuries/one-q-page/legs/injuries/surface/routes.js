module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page/legs/injuries/surface', function (req, res) {

      let injuredParts = req.session.data['injuredParts'] || []

      // If they pick apple or banana then show them the success page
       if (injuredParts.includes('Torso')) {
        res.redirect('/concepts/physical-injuries/one-q-page/torso')
      } else {
        res.redirect('/concepts/physical-injuries/one-q-page/your-injuries')
      }
    })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page/legs/injuries/surface/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page/legs/injuries/surface/index', content)
  })
  // END__######################################################################################################
}
