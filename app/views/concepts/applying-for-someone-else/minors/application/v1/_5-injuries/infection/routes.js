const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const dateHelper = require('../../../../../../../../helpers/date');

module.exports = function (router, content) {

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection', function (req, res) {
    // Get the answer from the query string
    var haveInfection = req.session.data['haveInfection']
    var incidentType = req.session.data['incidentType']

    if (haveInfection === 'Yes' && incidentType === 'Sexual assault or abuse') {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/details-vosaa')
    } else if (haveInfection === 'Yes' && incidentType !== 'Sexual assault or abuse') {
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/details')
    } else {
      // only show pregnancy questions if over a certain age

      var ageToCheck = 7;

      var dobDay = req.session.data['dob-day']
      var dobMonth = req.session.data['dob-month']
      var dobYear = req.session.data['dob-year']
      var dob = dateHelper.getDatefrom3inputs(dobDay, dobMonth, dobYear)

      var today = new Date();
      var duration = moment.duration(dob.diff(today)); // / calculate the difference between the two (that's in milliseconds or something)
      var ageAtApplication = duration.asDays(); // take that number in days  - we can do that thanks to the Moment library

      if (ageAtApplication > (-365 * ageToCheck)){ //if age at application is the target age or under
        return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-about-dmi')
      }
      req.session.data['ageAtApplication'] = null;
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_10-end/check-your-answers-page')
      }
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-pregnancy')
    }
  })



  // non-VOSAA cases - details

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/details', function (req, res) {
    // Get the answer from the query string

      // only show pregnancy questions if over a certain age

      var ageToCheck = 7;

      var dobDay = req.session.data['dob-day']
      var dobMonth = req.session.data['dob-month']
      var dobYear = req.session.data['dob-year']
      var dob = dateHelper.getDatefrom3inputs(dobDay, dobMonth, dobYear)

      var today = new Date();
      var duration = moment.duration(dob.diff(today)); // / calculate the difference between the two (that's in milliseconds or something)
      var ageAtApplication = duration.asDays(); // take that number in days  - we can do that thanks to the Moment library

      if (ageAtApplication > (-365 * ageToCheck)){ //if age at application is the target age or under
        return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-about-dmi')
      }
      req.session.data['ageAtApplication'] = null;
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_10-end/check-your-answers-page')
      }
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-pregnancy')
  })




  // non-VOSAA cases - details

  router.post('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/details-vosaa', function (req, res) {
    // Get the answer from the query string

      // only show pregnancy questions if over a certain age

      var ageToCheck = 7;

      var dobDay = req.session.data['dob-day']
      var dobMonth = req.session.data['dob-month']
      var dobYear = req.session.data['dob-year']
      var dob = dateHelper.getDatefrom3inputs(dobDay, dobMonth, dobYear)

      var today = new Date();
      var duration = moment.duration(dob.diff(today)); // / calculate the difference between the two (that's in milliseconds or something)
      var ageAtApplication = duration.asDays(); // take that number in days  - we can do that thanks to the Moment library

      if (ageAtApplication > (-365 * ageToCheck)){ //if age at application is the target age or under
        return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-about-dmi')
      }
      req.session.data['ageAtApplication'] = null;
      if (req.session.checking_answers) { //the user was coming from the check your answer page, we are returning them there
        return res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_10-end/check-your-answers-page')
      }
      res.redirect('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-pregnancy')
  })


  // Pass the question in to the page
  router.get('/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/', function (req, res) {
    res.render('concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/index', content)
  })



  // END__######################################################################################################
}
