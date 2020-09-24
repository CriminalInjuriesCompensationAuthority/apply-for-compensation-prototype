module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/most-common-first-v2/most-common/broken-bones', function (req, res) {

    let mostCommonInjuriesBreaks = req.session.data['mostCommonInjuriesBreaks'] || []
    let mostCommonInjuries = req.session.data['mostCommonInjuries'] || []

    // If they pick apple or banana then show them the success page
    if (mostCommonInjuriesBreaks.includes(' Head, face or neck')) {
      res.redirect('/concepts/physical-injuries/most-common-first-v2/most-common/broken-bones/head-face-neck')
    } else if (mostCommonInjuriesBreaks.includes(' Arm or hand')) {
      res.redirect('/concepts/physical-injuries/most-common-first-v2/most-common/broken-bones/arms')
    } else if (mostCommonInjuriesBreaks.includes(' Torso')) {
      res.redirect('/concepts/physical-injuries/most-common-first-v2/most-common/broken-bones/torso')
    } else if (mostCommonInjuriesBreaks.includes(' Leg or foot')) {
      res.redirect('/concepts/physical-injuries/most-common-first-v2/most-common/broken-bones/legs')
      // Go to new body part section
    } else if (mostCommonInjuries.includes(' Bruising')) {
      res.redirect('/concepts/physical-injuries/most-common-first-v2/most-common/bruising')
    } else if (mostCommonInjuries.includes(' Cuts or grazes')) {
      res.redirect('/concepts/physical-injuries/most-common-first-v2/most-common/cuts-grazes')
    } else if (mostCommonInjuries.includes(' Scarring')) {
      res.redirect('/concepts/physical-injuries/most-common-first-v2/most-common/scarring')
      // Go to new body part section
    } else if (mostCommonInjuries === '') {
      res.redirect('/concepts/physical-injuries/most-common-first-v2/most-common/none')
    }


  })


  // END__######################################################################################################
}
