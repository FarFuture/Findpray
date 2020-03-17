/*$("#submit").click(function(){
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
});*/

var request = new XMLHttpRequest()
request.onload = function() {
  // Begin accessing JSON data here
  var salat = JSON.parse(this.response)
  var fajr = "Fajr: " + salat.data.timings.Fajr
  var duhur = "Dhuhr: " + salat.data.timings.Duhur
  var asr = "Asr: " + salat.data.timings.Asr
  var maghirb =  "Maghrib: " + salat.data.timings.Maghirb
  var isha = "Isha: " + salat.data.timings.Isha
}

function onSubmit() {
  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;
  var url = "http://api.aladhan.com/v1/timingsByCity?city=" + city + "&country=" + country;
  
  request.open('GET', url, true);
  request.send();

}

function getEle(text) {
  var ele = document.getElementById(text);
  return ele;
}


function al_ert(message, bad) {

}

var fajr = getEle("fajr").innerText
var duhur = getEle("dhuhr").innerText
var asr = getEle("asr").innerText
var maghrib = getEle("maghrib").innerText
var isha = getEle("isha").innerText
