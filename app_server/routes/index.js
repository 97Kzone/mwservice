const express = require('express');
const router = express.Router();
//const ctrlMain = require('../controllers/main');

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other */
router.get('/about', ctrlOthers.about);

module.exports = router;
