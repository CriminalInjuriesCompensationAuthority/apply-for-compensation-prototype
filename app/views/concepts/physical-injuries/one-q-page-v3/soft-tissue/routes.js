module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/one-q-page-v3/soft-tissue', function (req, res) {
    let softTissueInjuries = req.session.data['softTissueInjuries'] || []

    // If they pick apple or banana then show them the success page
     if (softTissueInjuries.includes('Cuts')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/cuts.html')
    } else if (softTissueInjuries.includes('Bruises')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/bruises.html')
    } else if (softTissueInjuries.includes('Scarring')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/scarring.html')
    } else if (softTissueInjuries.includes('Burns')) {
     res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/burns.html')
    } else if (softTissueInjuries.includes('Muscle')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/muscle-ligament-tendon.html')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/paralysis/')
    }
  })


  router.post('/concepts/physical-injuries/one-q-page-v3/soft-tissue/cuts', function (req, res) {
    let softTissueInjuries = req.session.data['softTissueInjuries'] || []

    if (softTissueInjuries.includes('Bruises')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/bruises.html')
    } else if (softTissueInjuries.includes('Scarring')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/scarring.html')
    } else if (softTissueInjuries.includes('Burns')) {
     res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/burns.html')
    } else if (softTissueInjuries.includes('Muscle')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/muscle-ligament-tendon.html')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/paralysis/')
    }
  })

  router.post('/concepts/physical-injuries/one-q-page-v3/soft-tissue/bruises', function (req, res) {
    let softTissueInjuries = req.session.data['softTissueInjuries'] || []

    if (softTissueInjuries.includes('Scarring')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/scarring.html')
    } else if (softTissueInjuries.includes('Burns')) {
     res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/burns.html')
    } else if (softTissueInjuries.includes('Muscle')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/muscle-ligament-tendon.html')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/paralysis/')
    }
  })

  router.post('/concepts/physical-injuries/one-q-page-v3/soft-tissue/scarring', function (req, res) {
    let softTissueInjuries = req.session.data['softTissueInjuries'] || []

    if (softTissueInjuries.includes('Burns')) {
     res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/burns.html')
    } else if (softTissueInjuries.includes('Muscle')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/muscle-ligament-tendon.html')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/paralysis/')
    }
  })

  router.post('/concepts/physical-injuries/one-q-page-v3/soft-tissue/burns', function (req, res) {
    let softTissueInjuries = req.session.data['softTissueInjuries'] || []
    if (softTissueInjuries.includes('Muscle')) {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/soft-tissue/muscle-ligament-tendon.html')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v3/paralysis/')
    }
  })

  router.post('/concepts/physical-injuries/one-q-page-v3/soft-tissue/muscle-ligament-tendon', function (req, res) {
    res.redirect('/concepts/physical-injuries/one-q-page-v3/paralysis/')
  })

  // END__######################################################################################################
}
