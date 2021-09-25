/* home */
const homelist = (req, res) => {
    res.render('locations-list', { title : 'Home by 2016250002 강동표'});
};

/* Location info */
const locationInfo = (req, res) => {
    res.render('location-info', { title : 'Location info by 2016250002 강동표'});
};

/* Add Review */
const addReview = (req, res) => {
    res.render('index', { title : 'Add review by 2016250002 강동표'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};