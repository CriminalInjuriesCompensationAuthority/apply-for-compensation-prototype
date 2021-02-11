// Core dependencies
const fs = require('fs')
const path = require('path')

// NPM dependencies
const express = require('express')
const router = express.Router()
const moment = require('moment'); // this is to use the Moment JavaScript library which helps manipulating dates
const viewContent = require('../routes-content');
const utils = require('../utils')

//------------------------------------------------------------------------------------------//
// CONCEPTS AND IDEATION                                                                    //
// This routes file  contains the routes for the Applying for someone else journey concepts //
//------------------------------------------------------------------------------------------//


// MINORS JOURNEY Latest work based on complete self journey UK/EU - Early 2021 //


// 1 - Qualifying questions

require('../views/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/fatal-application/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/incident-reported/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/crime-reference/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/who-is-making-the-application/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/parent-guardian/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/under-18/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/authority-to-apply/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/under-18/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_1-qualifying/british-citizen/routes')(router, viewContent);


// 2 - Your details
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/context-your-details/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/confirmation-options/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/name/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/address/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/victim-address/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/email-address/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-your-details/phone-number/routes')(router, viewContent);

// 2 - Victim details
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/context-victim-details/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-have-other/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/name-other/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/date-of-birth/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/address/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/care-order/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_2-victim-details/care-order-details/routes')(router, viewContent);



// 3 Incident details
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/application-delay/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/context-incident-details/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/crime-reference/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/crime-reported-date/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/england-location/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/incident-date/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/incident-location/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/incident-type/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/period-of-abuse-end/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/period-of-abuse-start/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/police-force/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/reporting-delay/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/scotland-location/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/single-or-multiple-incidents/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/somewhere-else/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/wales-location/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words-question/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_3-incident-details/own-words/routes')(router, viewContent);

// 4 offender

require('../views/concepts/applying-for-someone-else/minors/application/v1/_4-offender/contact-with-offender/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_4-offender/context-contact-with-offender/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_4-offender/do-you-know-offender-name/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_4-offender/offender-name/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_4-offender/what-is-relationship/routes')(router, viewContent);

// 5 Injuries

require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-physical-injuries/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/have-physical-injuries/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/infection/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/pregnancy/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/arm/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/elbow/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/finger-thumb/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/hand/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/shoulder/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/wrist/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/skin/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/arms/tissue/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/head-face-neck/head/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/head-face-neck/face/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/head-face-neck/neck/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/head-face-neck/ear-hearing/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/head-face-neck/eye-sight/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/head-face-neck/nose/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/head-face-neck/mouth/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/head-face-neck/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/head-face-neck/skin/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/head-face-neck/tissue/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/leg/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/ankle/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/foot/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/hip/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/knee/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/toes/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/skin/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/legs/tissue/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/torso/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/torso/abdomen/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/torso/back/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/torso/chest/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/torso/genitals/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/torso/shoulder/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/torso/pelvis/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/torso/skin/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/injured-body-parts/torso/tissue/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/context-about-dmi/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/dmi-duration/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_5-injuries/how-it-affected-you/routes')(router, viewContent);


// 6 Treatment

require('../views/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/treatment-details/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/finished-treatment/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/dmi-treatment-types/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/context-treatment/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/gp-details/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/gp-registered/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/gp-visited/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/hospital-visited/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/hospital-details/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/dentist-visited/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/application/v1/_6-treatment/dentist-details/routes')(router, viewContent);


// MINORS JOURNEY Based on MVP VOSAA Journey - Late 2019 / Early 2020 //

require('../views/concepts/applying-for-someone-else/minors/care-order/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/care-order-details/routes')(router, viewContent);

require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-1/upload-choice/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-1/upload/routes')(router, viewContent);

require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2/upload-choice/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2/upload/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2/confirm-names/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-2/upload-other-names/routes')(router, viewContent);

require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload-choice/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/confirm-names/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload-name-change/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload-another/routes')(router, viewContent);
require('../views/concepts/applying-for-someone-else/minors/eligibility-to-apply/option-3/upload-another-document/routes')(router, viewContent);




// Add your routes here - above the module.exports line
module.exports = router;
