var elJackson = $('.jackson');
var elAltaSnowbird = $('.alta-snowbird');
var elBachlor = $('.bachlor');
var elSquaw = $('.squaw');
var elSunValley = $('.sunvalley');
var elBaker = $('.baker');

jQuery(document).ready(function($) {
  $.ajax({
  //Jackson Hole Lat and Long
  url : "https://api.wunderground.com/api/d8a5536f9571d386/forecast/q/43.5873,-110.8270.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var WeatherUnit = { 
    snow0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['snow_allday']['in'],
    high0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['high']['fahrenheit'],
    low0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['low']['fahrenheit'],
  }
  console.log(parsed_json);
  elJackson.html(
    "Jackson Hole, Wyoming<br>(5.5 hours from Boise)<br>" +
    "Snow expected today is " + WeatherUnit.snow0 + " inches<br>" +
    "The high for today is " + WeatherUnit.high0 + " degrees F<br>" +
    "The low for today is " + WeatherUnit.low0 + " degrees F"
  );
  }
  });
});

jQuery(document).ready(function($) {
  $.ajax({
  //Alta & Snowbird Lat and Long
  url : "https://api.wunderground.com/api/d8a5536f9571d386/forecast/q/40.5819,-111.6552.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var WeatherUnit = { 
    snow0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['snow_allday']['in'],
    high0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['high']['fahrenheit'],
    low0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['low']['fahrenheit']
  }
  elAltaSnowbird.html(
    "Alta/Snowbird, Utah<br>(5.5 hours from Boise)<br>" +
    "Snow expected today is " + WeatherUnit.snow0 + " inches<br>" +
    "The high for today is " + WeatherUnit.high0 + " degrees F<br>" +
    "The low for today is " + WeatherUnit.low0 + " degrees F"
  );
  }
  });
});

jQuery(document).ready(function($) {
  $.ajax({
  //Bachlor Lat and Long
  url : "https://api.wunderground.com/api/d8a5536f9571d386/forecast/q/43.9792,-121.6886.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var WeatherUnit = { 
    snow0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['snow_allday']['in'],
    high0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['high']['fahrenheit'],
    low0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['low']['fahrenheit']
  }
  elBachlor.html(
    "Mt. Bachlor, Oregon<br>(5.5 hours from Boise)<br>" +
    "Snow expected today is " + WeatherUnit.snow0 + " inches<br>" +
    "The high for today is " + WeatherUnit.high0 + " degrees F<br>" +
    "The low for today is " + WeatherUnit.low0 + " degrees F"
  );
  }
  });
});

jQuery(document).ready(function($) {
  $.ajax({
  //Baker Lat and Long
  url : "https://api.wunderground.com/api/d8a5536f9571d386/forecast/q/48.7767,-121.8144.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var WeatherUnit = { 
    snow0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['snow_allday']['in'],
    high0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['high']['fahrenheit'],
    low0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['low']['fahrenheit']
  }
  elBaker.html(
    "Mt. Baker, Washington<br>(7.5 hours from Boise)<br>" +
    "Snow expected today is " + WeatherUnit.snow0 + " inches<br>" +
    "The high for today is " + WeatherUnit.high0 + " degrees F<br>" +
    "The low for today is " + WeatherUnit.low0 + " degrees F"
  );
  }
  });
});

jQuery(document).ready(function($) {
  $.ajax({
  //Squaw Lat and Long
  url : "https://api.wunderground.com/api/d8a5536f9571d386/forecast/q/39.1970,-120.2357.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var WeatherUnit = { 
    snow0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['snow_allday']['in'],
    high0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['high']['fahrenheit'],
    low0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['low']['fahrenheit']
  }
  elSquaw.html(
    "Squaw Valley, California<br>(7 hours from Boise)<br>" +
    "Snow expected today is " + WeatherUnit.snow0 + " inches<br>" +
    "The high for today is " + WeatherUnit.high0 + " degrees F<br>" +
    "The low for today is " + WeatherUnit.low0 + " degrees F"
  );
  }
  });
});

jQuery(document).ready(function($) {
  $.ajax({
  //Sun Valley Lat and Long
  url : "https://api.wunderground.com/api/d8a5536f9571d386/forecast/q/43.6971,-114.3517.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var WeatherUnit = { 
    snow0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['snow_allday']['in'],
    high0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['high']['fahrenheit'],
    low0: parsed_json['forecast']['simpleforecast']['forecastday']['0']['low']['fahrenheit']
  }
  elSunValley.html(
    "Sun Valley, Idaho<br>(3 hours from Boise)<br>" +
    "Snow expected today is " + WeatherUnit.snow0 + " inches<br>" +
    "The high for today is " + WeatherUnit.high0 + " degrees F<br>" +
    "The low for today is " + WeatherUnit.low0 + " degrees F"
  );
  }
  });
});

/* NOAA
jQuery(document).ready(function($) {
  $.ajax({
    url : "https://www.ncdc.noaa.gov/cdo-web/api/v2/datatypes?stationid=COOP:010957",
    data : {data: "json"},
    headers: {token: "zfGZOWPpYRlRpraFbPTrcQJOWotlOLCn"},
    success : function(returnedData) {
      console.log(returnedData);
    }
  });
});
*/