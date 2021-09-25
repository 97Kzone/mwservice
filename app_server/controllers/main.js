const index = (req, res) => {
    res.render('index', {title : 'Express by 2016250002 강동표' })
};

module.exports = {
    index
};