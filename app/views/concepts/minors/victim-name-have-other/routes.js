module.exports = function (router, content) {
  // START__####################################################################################################
  // File: victim-name-have-other
  // Variable: victimHaveOtherName
  router.post('/concepts/minors/victim-name-have-other', function (req, res) {
    var victimHaveOtherName = req.session.data['victimHaveOtherName'];
    if (victimHaveOtherName === 'No')  {
      return res.redirect('/concepts/minors/care-order')
    }
    res.redirect('/concepts/minors/victim-name-other')
  })

  // Pass the question in to the page
  router.get('/concepts/minors/victim-name-have-other/', function (req, res) {
    res.render('concepts/minors/victim-name-have-other/index', content)
  })
  // Pass the question in to the page
  router.get('/concepts/minors/victim-name-have-other/error', function (req, res) {
    res.render('concepts/minors/victim-name-have-other/error', content)
  })
  // END__######################################################################################################
}
