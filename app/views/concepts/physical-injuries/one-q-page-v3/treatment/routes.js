module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v3/treatment', function (req, res) {
  // Get the answer from the query string
  var physicalTreatment = req.session.data['physicalTreatment']

  if (physicalTreatment === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v3/treatment-details')
  } else {
    res.redirect('/concepts/physical-injuries/one-q-page-v3/context-about-dmi')
  }
})

// END__######################################################################################################
}
