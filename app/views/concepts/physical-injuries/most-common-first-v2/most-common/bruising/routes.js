module.exports = function (router, content) {
  // START__####################################################################################################

  router.post('/concepts/physical-injuries/most-common-first-v2/most-common/bruising', function (req, res) {

        let mostCommonInjuries = req.session.data['mostCommonInjuries'] || []

        // If they pick apple or banana then show them the success page
        if (mostCommonInjuries.includes('Cuts or grazes')) {
          res.redirect('/concepts/physical-injuries/most-common-first-v2/most-common/cuts-grazes')
        } else if (mostCommonInjuries.includes('Scarring')) {
          res.redirect('/concepts/physical-injuries/most-common-first-v2/most-common/scarring')
        } else {
          res.redirect('/concepts/physical-injuries/most-common-first-v2/your-injuries')
        }

      })

  // END__######################################################################################################
}
