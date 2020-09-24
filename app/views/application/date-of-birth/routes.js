const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
module.exports = function (router, content) {
  // START__####################################################################################################
  // File: date-of-birth
  //
  router.post('/application/date-of-birth', function (req, res) {
    // getting the inputs to be able to calculate if the user is a minor or not on the day of application
    var year = Number.parseInt(req.session.data['dob-year'], 10); // making sure with have a well formated number for year, month and day
    var month = Number.parseInt(req.session.data['dob-month'] - 1, 10); // month are starting at 0 in javascript, that's why we need to subtract 1
    var day = Number.parseInt(req.session.data['dob-day'], 10);

    var currentDate = moment(); //create a date that is 'just now ' so today
    var dateOfBirth = moment([year, month, day]); //create a date that is the DOB from the 3 elements we received on the date of birth page from the user)

    var duration = moment.duration(currentDate.diff(dateOfBirth));// calculate the difference between the two
    var ageInYears = duration.asYears(); // take that number in years  - we can do that thanks to the Moment library

    if(ageInYears < 18) { // it's a minor
      res.redirect('/application/date-of-birth/transition')
      // @todo we need to build a page that explains to users that they can only use this service if they are over 18
    }
    if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
      return res.redirect('/application/check-your-answers-page')
    }
    res.redirect('/application/address-manually')
  })

  // Pass the question in to the page
  router.get('/application/date-of-birth/', function (req, res) {
    res.render('application/date-of-birth/index', content)
  })

  // Pass the question in to the page
  router.get('/application/date-of-birth/transition', function (req, res) {
    res.render('application/date-of-birth/transition', content)
  })


  router.get('/application/date-of-birth/error-before-incident', function (req, res) {
    res.render('application/date-of-birth/error-before-incident', content)
  })

  router.get('/application/date-of-birth/error-blank', function (req, res) {
    res.render('application/date-of-birth/error-blank', content)
  })

  router.get('/application/date-of-birth/error-incomplete', function (req, res) {
    res.render('application/date-of-birth/error-incomplete', content)
  })

  router.get('/application/date-of-birth/error-past', function (req, res) {
    res.render('application/date-of-birth/error-past', content)
  })

  router.get('/application/date-of-birth/error-before-reported', function (req, res) {
    res.render('application/date-of-birth/error-before-reported', content)
  })

  router.get('/application/date-of-birth/error-before-start', function (req, res) {
    res.render('application/date-of-birth/error-before-start', content)
  })

  router.get('/application/date-of-birth/error-before-stop', function (req, res) {
    res.render('application/date-of-birth/error-before-stop', content)
  })
// END__######################################################################################################
}
