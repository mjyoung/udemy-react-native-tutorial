const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=1d224204f05242e1e7eb5f047412da62';

const kelvinToF = (kelvin) => {
  return Math.round((kelvin-273.15) * 1.8 + 32) + ' ˚F';
};

module.exports = (latitude, longitude) => {
  let url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
  fetch(url)
  .then((response) => {
      return response.json();
    })
  .then((json) => {
      return {
        city: json.city,
        temperature: kelvinToF(json.main.temp),
        description: json.weather[0].description
      };
    });
};
