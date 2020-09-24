router.get('/concepts/physical-injuries/autocomplete/select-injuries', function (req, res) {
  res.render('concepts/physical-injuries/autocomplete/select-injuries',
    {
      proceedings: utils.getProceedings()
    })
});

router.get('/concepts/physical-injuries/autocomplete/advanced/', function (req, res) {
    res.render('concepts/physical-injuries/autocomplete/advanced')
});
