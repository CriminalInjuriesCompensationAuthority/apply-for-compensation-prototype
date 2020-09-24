module.exports = function (router, content) {

router.post('/concepts/physical-injuries/most-common-first/most-common/other', function (req, res) {
  // Get the answer from the query string
  var otherPhysicalInjuries = req.session.data['otherPhysicalInjuries']
  var mostCommonInjuries = req.session.data['mostCommonInjuries']

  if (otherPhysicalInjuries === 'No') {
    res.redirect('/concepts/physical-injuries/most-common-first/end')

  } else if (mostCommonInjuries.includes(' Broken bones')) {
    res.redirect('/concepts/physical-injuries/most-common-first/most-common/broken-bones')
  } else if (mostCommonInjuries.includes(' Bruising')) {
    res.redirect('/concepts/physical-injuries/most-common-first/most-common/bruising')
  } else if (mostCommonInjuries.includes(' Cuts or grazes')) {
    res.redirect('/concepts/physical-injuries/most-common-first/most-common/cuts-grazes')
  } else if (mostCommonInjuries.includes(' Scarring')) {
    res.redirect('/concepts/physical-injuries/most-common-first/most-common/scarring')
  } else {
    res.redirect('/concepts/physical-injuries/most-common-first/end')
  }
})

// END__######################################################################################################
}
