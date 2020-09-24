module.exports = function (router, content) {

router.post('/concepts/physical-injuries/one-q-page-v4/work-capacity', function (req, res) {
  // Get the answer from the query string
  var workCapacity = req.session.data['workCapacity']

  if (workCapacity === 'Yes') {
    // Redirect to the relevant page
    res.redirect('/concepts/physical-injuries/one-q-page-v4/lost-earnings')
  } else {
    // If the variable is any other value (or is missing) render the page requested
    res.redirect('/application/context-prev-compensation')
  }
})

// END__######################################################################################################
}
