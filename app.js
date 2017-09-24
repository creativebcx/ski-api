var elTest = $('.show-api-data');

jQuery(document).ready(function($) {
  $.ajax({
  //Jackson Hole Lat and Long
  url : "http://api.wunderground.com/api/f6866eb728034f07/geolookup/conditions/q/43.4799,-110.7624.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  elTest.html(
    "Location: " + location + " is " + temp_f + " degrees currently."
  );
  }
  });
});