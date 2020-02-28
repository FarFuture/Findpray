const $ = require("jquery");
$("#submit").click(function(){
  var city = $("#city").text();
  var country = $("#country").text();
  var url = "http://api.aladhan.com/v1/timingsByCity?city=" + city + "&country=" + country + "&method=2";
  $.get(url, function(data, status){
    var info = JSON.parse(data);
    var fajr = info.data.timings.fajr;
    var dhuhr = info.data.timings.dhuhr;
    var asr = info.data.timings.asr;
    var maghrib = info.data.timings.maghrib;
    var isha = info.data.timings.isha;
    $("#fajr").text("Fajr: " +  fajr);
    $("#dhuhr").text("Dhuhr: " +  dhuhr);
    $("#asr").text("Asr: " +  asr);
    $("#maghrib").text("Maghrib: " +  maghrib);
    $("#isha").text("Isha: " +  isha);
    
  });
});