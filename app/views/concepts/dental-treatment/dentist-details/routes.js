module.exports = function (router, content) {
  // START__####################################################################################################
  router.post('/concepts/dental-treatment/dentist-details', function (req, res) {
    res.redirect('/concepts/dental-treatment/dentist-details')
  })


  // Pass the question in to the page
  router.get('/concepts/dental-treatment/dentist-details/', function (req, res) {
    res.render('concepts/dental-treatment/dentist-details/index', content)
  })

  // END__######################################################################################################
}
