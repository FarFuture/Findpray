$("#submit").click(function(){
  var city = $("#city").text();
  var country = $("#country").text();
  var url = "http://api.aladhan.com/v1/timingsByCity?city=" + city + "&country=" + country + "&method=2";
  $.get(url, function(data, status){
    var info = JSON.parse(data);
    var prayers = [info.data.timings.dhuhr];
  });
});