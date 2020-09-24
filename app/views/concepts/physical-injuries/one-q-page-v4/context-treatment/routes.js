module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/concepts/physical-injuries/one-q-page-v4/context-treatment', function (req, res) {
    var havePhysicalInjuries = req.session.data['havePhysicalInjuries']
    var haveInfection = req.session.data['haveInfection']
    var pregnancy = req.session.data['pregnancy']
    var pregnancyLoss = req.session.data['pregnancyLoss']
    var dmiDoYouHave = req.session.data['dmiDoYouHave']

    if ((havePhysicalInjuries === 'Yes') || (haveInfection === 'Yes') || (pregnancy === 'Yes') || (pregnancyLoss === 'Yes') ) {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/treatment-details')
    } else if (dmiDoYouHave === 'Yes') {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/dmi-treatment-types')
    } else {
      res.redirect('/concepts/physical-injuries/one-q-page-v4/gp-registered')
    }
  })

  // Pass the question in to the page
  router.get('/concepts/physical-injuries/one-q-page-v4/context-treatment/', function (req, res) {
    res.render('concepts/physical-injuries/one-q-page-v4/context-treatment/index', content)
  })
  // END__######################################################################################################
}
