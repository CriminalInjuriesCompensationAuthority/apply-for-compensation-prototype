module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/free-text/injured-parts', function (req, res) {
    let injuredParts = req.session.data['injuredParts'] || []
    let nonSpecificBodyParts = req.session.data['nonSpecificBodyParts'] || []

    // If they pick apple or banana then show them the success page
    if (injuredParts.includes('head')) {
      res.redirect('/concepts/physical-injuries/free-text/injuries/head-face-neck.html')
    } else if (injuredParts.includes('torso')) {
      res.redirect('/concepts/physical-injuries/free-text/injuries/torso.html')
    } else if (injuredParts.includes('arms')) {
      res.redirect('/concepts/physical-injuries/free-text/injuries/arms.html')
    } else if (injuredParts.includes('legs')) {
      res.redirect('/concepts/physical-injuries/free-text/injuries/legs.html')
    } else if (nonSpecificBodyParts !== 'undefined' ) {
      res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
    } else {
      res.redirect('/concepts/physical-injuries/free-text/end')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/free-text/injured-parts/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/injured-parts/index', content)
  })
  // END__######################################################################################################
}
