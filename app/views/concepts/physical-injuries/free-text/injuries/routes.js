module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/free-text/injuries/head-face-neck', function (req, res) {
    let nonSpecificBodyParts = req.session.data['nonSpecificBodyParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []
    let headFaceNeckInjuries = req.session.data['headFaceNeckInjuries'] || []
    // If they pick apple or banana then show them the success page
    if (injuredParts.includes('torso')) {
      res.redirect('/concepts/physical-injuries/free-text/injuries/torso.html')
    } else if (injuredParts.includes('arms')) {
      res.redirect('/concepts/physical-injuries/free-text/injuries/arms.html')
    } else if (injuredParts.includes('legs')) {
      res.redirect('/concepts/physical-injuries/free-text/injuries/legs.html')
    } else if (nonSpecificBodyParts !== 'undefined' ) {
      res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
    } else if (headFaceNeckInjuries !== 'undefined' ) {
      res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
    } else {
      res.redirect('/concepts/physical-injuries/free-text/end')
    }
  })


  router.post('/concepts/physical-injuries/free-text/injuries/torso', function (req, res) {
    let nonSpecificBodyParts = req.session.data['nonSpecificBodyParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []
    let headFaceNeckInjuries = req.session.data['headFaceNeckInjuries'] || []
    let torsoInjuries = req.session.data['torsoInjuries'] || []
    // If they pick apple or banana then show them the success page
    if (injuredParts.includes('arms')) {
      res.redirect('/concepts/physical-injuries/free-text/injuries/arms.html')
    } else if (injuredParts.includes('legs')) {
      res.redirect('/concepts/physical-injuries/free-text/injuries/legs.html')
    } else if (headFaceNeckInjuries.includes('other')) {
      res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
    } else if (nonSpecificBodyParts !== 'undefined' ) {
      res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
    } else if (headFaceNeckInjuries !== 'undefined' ) {
      res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
    } else if (torsoInjuries !== 'undefined' ) {
      res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
    } else {
      res.redirect('/concepts/physical-injuries/free-text/end')
    }
  })


  router.post('/concepts/physical-injuries/free-text/injuries/arms', function (req, res) {
    let nonSpecificBodyParts = req.session.data['nonSpecificBodyParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []
    let headFaceNeckInjuries = req.session.data['headFaceNeckInjuries'] || []
    let torsoInjuries = req.session.data['torsoInjuries'] || []
    let armInjuries = req.session.data['armInjuries'] || []
    // If they pick apple or banana then show them the success page
    if (injuredParts.includes('legs')) {
      res.redirect('/concepts/physical-injuries/free-text/injuries/legs.html')
    } else if (nonSpecificBodyParts !== 'undefined' ) {
      res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
    } else if (headFaceNeckInjuries !== 'undefined' ) {
      res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
    } else if (torsoInjuries !== 'undefined' ) {
      res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
    } else if (armInjuries !== 'undefined' ) {
      res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
    } else {
      res.redirect('/concepts/physical-injuries/free-text/end')
    }
  })


  router.post('/concepts/physical-injuries/free-text/injuries/legs', function (req, res) {
    let nonSpecificBodyParts = req.session.data['nonSpecificBodyParts'] || []
    let injuredParts = req.session.data['injuredParts'] || []
    let headFaceNeckInjuries = req.session.data['headFaceNeckInjuries'] || []
    let torsoInjuries = req.session.data['torsoInjuries'] || []
    let armInjuries = req.session.data['armInjuries'] || []
    let legInjuries = req.session.data['legInjuries'] || []

    if (nonSpecificBodyParts !== 'undefined' ) {
    res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
  } else if (headFaceNeckInjuries !== 'undefined' ) {
    res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
  } else if (torsoInjuries !== 'undefined' ) {
    res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
  } else if (armInjuries !== 'undefined' ) {
    res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
  } else if (legInjuries !== 'undefined' ) {
    res.redirect('/concepts/physical-injuries/free-text/have-other-injuries')
  } else {
    res.redirect('/concepts/physical-injuries/free-text/end')
  }
})


  // Pass the questions in to the page
  router.get('/concepts/physical-injuries/free-text/injuries/head-face-neck/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/injuries/head-face-neck', content)
  })
  router.get('/concepts/physical-injuries/free-text/injuries/torso/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/injuries/torso.html', content)
  })
  router.get('/concepts/physical-injuries/free-text/injuries/arms/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/injuries/arms.html', content)
  })
  router.get('/concepts/physical-injuries/free-text/injuries/legs/', function (req, res) {
    res.render('concepts/physical-injuries/free-text/injuries/legs.html', content)
  })

  // END__######################################################################################################
}
