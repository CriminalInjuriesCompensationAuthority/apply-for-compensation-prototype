module.exports = function (router, content) {
  // START__####################################################################################################
  // File: bridge
  // Variable: criminalConvictions

  router.post('/application/_5-injuries/context-physical-injuries', function (req, res) {
    res.redirect('/application/_5-injuries/have-physical-injuries')
  })

  // Pass the question in to the page
  router.get('/application/_5-injuries/context-physical-injuries/', function (req, res) {
    res.render('application/_5-injuries/context-physical-injuries/index', content)
  })
  // END__######################################################################################################
}



// module.exports = function (router, content) {
//
// router.post('/application/_5-injuries/context-physical-injuries', function (req, res) {
//   // Get the answer from the query string
//   var incidentType = req.session.data['incidentType']
//
//   if (incidentType === 'Sexual assault or abuse') {
//     // Redirect to the relevant page
//     res.redirect('/application/_5-injuries/infection/vosaa')
//
//   } else {
//     // If the variable is any other value (or is missing) render the page requested
//     res.redirect('/application/_5-injuries/infection')
//   }
// })
//
// // Pass the question in to the page
// router.get('/application/_5-injuries/context-physical-injuries/', function (req, res) {
//   res.render('application/_5-injuries/context-physical-injuries/index', content)
// })
//
//
// // END__######################################################################################################
// }
