module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v4/context-physical-injuries', function (req, res) {
  // Get the answer from the query string
  var incidentType = req.session.data['incidentType']

  if (incidentType === 'saoa') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v4/infection')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/concepts/physical-injuries/one-q-page-v4/infection/vosaa')
  }
})

// Pass the question in to the page
router.get('/concepts/physical-injuries/one-q-page-v4/context-physical-injuries/', function (req, res) {
  res.render('concepts/physical-injuries/one-q-page-v4/context-physical-injuries/index', content)
})


// END__######################################################################################################
}
