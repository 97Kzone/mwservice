const request = require('request');

const apiOptions = {
  server: 'http://localhost:3000'
};
if(process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://loc8r-97kzone.herokuapp.com';
}

/* home */
const homelist = (req, res) => {
  const path = '/api/locations';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
    qs: {
      lng: 126.79149,
      lat: 37.65637,
      maxDistance: 200000
    }
  };
  request(
    requestOptions,
    (err, response, body) => {
      let data = [];
      if (response.statusCode === 200 && body.length) {
        data = body.map((item) => {
          item.distance = formatDistance(item.distance);
          return item;
        });
      };
      renderHomepage(req, res, data);
    }
  );
};

const formatDistance = (distance) => {
  let thisDistance = 0;
  let unit = 'm';
  if (distance > 1000) {
    thisDistance = parseFloat(distance / 1000).toFixed(1);
    unit = 'km';
  } else {
    thisDistance = Math.floor(distance);
  }
  return thisDistance + unit;
};

const renderHomepage = (req, res, responseBody) => {
  res.render('locations-list', {
        title : 'Loc8r - find a place to work with wifi',
        pageHeader : {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work \
        when out and about. Perhaps with coffee, cake or a pint? \
        Let Loc8r help you find the place you're looking for.", 
        locations: responseBody
  });
};

/* Location info */
const locationInfo = (req, res) => {
    res.render('location-info',
      {
        title: 'Starcups',
         pageHeader: {
          title: 'Loc8r',
        },
        sidebar: {
          context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
          callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
          name: 'Starcups',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 3,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          coords: {lat: 37.3666, lng: 127.0111},
          openingTimes: [
            {
              days: 'Monday - Friday',
              opening: '7:00am',
              closing: '7:00pm',
              closed: false
            },
            {
              days: 'Saturday',
              opening: '8:00am',
              closing: '5:00pm',
              closed: false
            },
            {
              days: 'Sunday',
              closed: true
            }
          ],
          reviews: [
            {
              author: 'DongPyo Kang ',
              rating: 5,
              timestamp: '1 Oct 2021',
              reviewText: 'What a great place. I can\'t say enough good things about it.'
            },
            {
              author: 'Charlie Chaplin ',
              rating: 3,
              timestamp: '1 Oct 2021',
              reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }
          ]
        }
      }
    );
};
/* Add Review */
const addReview = (req, res) => {
    res.render('location-review-form',
      {
        title: 'Review Starcups on Loc8r' ,
        pageHeader: { title: 'Review Starcups' }
      }
    );
  };

module.exports = {
    homelist,
    locationInfo,
    addReview
};