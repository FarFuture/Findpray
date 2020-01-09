var request = new XMLHttpRequest()


var city = document.getElementById("city").value;
// Open a new connection, using the GET request on the URL endpoint
var params = JSON.stringify({ city: });

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {
  // Begin accessing JSON data here
  var salat = JSON.parse(this.response)
  var fajr = salat.data.Fajr
  var duhur = salat.data.Duhur
  var asr = salat.data.Asr
  var maghirb = salat.data.Maghirb
  var isha = salat.data.Isha

}

// Send request
request.send()