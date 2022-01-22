const express = require('express');
const axios = require('axios').default;
const sequelize = require('./config/connection');
const NodeGeocoder = require('node-geocoder');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());


// node geocoder

const goeLocater = async function() {
    const options = {

        provider: 'google',
      
        // Optional depending on the providers
        fetch: customFetchImplementation,
        apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
        formatter: null // 'gpx', 'string', ...
      };

    const geocoder = NodeGeocoder(options);

// Using searchBar
const res = await geocoder.geocode('29 champs elysée paris');

}

// const getLat = async function() {
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//     const successCallback = (position) => {
//         const lat = position.coords.latitude;
    
//         console.log(lat);
//         return lat;
//     };
//     const errorCallback = (error) => {
//         console.error(error);
//     };
// };

// const GetLong = function() {
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//     const successCallback = (position) => {
//         const long = position.coords.longitude;
    
//         console.log(long);
//         return long;
//     };
//     const errorCallback = (error) => {
//         console.error(error);
//     };
// }

// const getRestaurants = function() {
//     var options = {
//         method: 'GET',
//         url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
//         params: {
//           latitude: getLat(),
//           longitude: GetLong(),
//           limit: '30',
//           currency: 'USD',
//           distance: '2',
//           open_now: 'false',
//           lunit: 'km',
//           lang: 'en_US'
//         },
//         headers: {
//           'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//           'x-rapidapi-key': '4969704668msh8e43e445810c355p1b4d83jsn7d564529bba1'
//         }
//       };

//       axios.request(options).then(function (response) {
//           console.log(response.data);
//       }).catch(function (error) {
//           console.error(error);
//       });
// }


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

module.exports = axios;
