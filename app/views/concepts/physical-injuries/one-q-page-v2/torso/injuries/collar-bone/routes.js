module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v2/torso/injuries/collar-bone', function (req, res) {
    let torsoInjuredParts = req.session.data['torsoInjuredParts'] || []

    if (torsoInjuredParts.includes('Genitals')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/torso/injuries/genitals')
    } else if (torsoInjuredParts.includes('Internal organs')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/torso/injuries/internal-organs')
    } else if (torsoInjuredParts.includes('Ribs')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/torso/injuries/ribs')
    } else if (torsoInjuredParts.includes('Shoulder')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/torso/injuries/shoulder-blade')
    } else if (torsoInjuredParts.includes('Tail bone')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/torso/injuries/tail-bone')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v2/your-injuries')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v2/torso/injuries/collar-bone/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v2/torso/injuries/collar-bone/index', content)
  })
  // END__######################################################################################################
}
