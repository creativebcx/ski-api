var elJacksonForecast = $('.show-api-data');

jQuery(document).ready(function($) {
  $.ajax({
  //Jackson Hole Lat and Long
  url : "https://api.wunderground.com/api/f6866eb728034f07/forecast/q/43.5873,-110.8270.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var jacksonWeatherUnit0 = 
    parsed_json['forecast']['simpleforecast']['forecastday']['0']['snow_allday']['in'];
  console.log(jacksonWeatherUnit0);
  console.log(parsed_json);
  elJacksonForecast.html(
    "Jackson Hole, Wyoming<br>" +
    "Snow expected today is " + jacksonWeatherUnit0 + " inches"
  );
  }
  });
});