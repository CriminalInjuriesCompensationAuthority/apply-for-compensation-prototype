module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/most-common-first/most-common/broken-bones/legs', function (req, res) {

    let mostCommonInjuries = req.session.data['mostCommonInjuries'] || []

    // If they pick apple or banana then show them the success page
    if (mostCommonInjuries === '') {
      res.redirect('/concepts/physical-injuries/most-common-first/most-common/none')
      // Go to other injury types
    } else if (mostCommonInjuries.includes('Bruising')) {
      res.redirect('/concepts/physical-injuries/most-common-first/most-common/bruising')
    } else if (mostCommonInjuries.includes('Cuts or grazes')) {
      res.redirect('/concepts/physical-injuries/most-common-first/most-common/cuts-grazes')
    } else if (mostCommonInjuries.includes('Scarring')) {
      res.redirect('/concepts/physical-injuries/most-common-first/most-common/scarring')
    } else {
      res.redirect('/concepts/physical-injuries/most-common-first/your-injuries')
    }

  })
}
