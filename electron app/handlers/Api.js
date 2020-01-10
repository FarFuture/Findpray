let fs = require('fs')
var request = new XMLHttpRequest()


var city = $('#city').val()
var state = $('#state').val()
var country = $('#country').val()

if(fs.existsSync(filename)) {
  fs.readFile('Input.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    // Converting Raw Buffer to text
    // data using tostring function.
    var info = JSON.parse(data)
    city = info.city
    state = info.state
    country = info.country 
})
} else {
  var fals = JSON.stringify({
    city: city,
    state: state,
    country:country
  })
  fs.writeFile(filename, fals, (err) => {

        // In case of a error throw err.
      if (err) throw err;
  })
}
// Open a new connection, using the GET request on the URL endpoint
var params = JSON.stringify({
  city: city,
  state: state,
  country:country,
  method: 2
});

request.open('POST', 'https://ghibliapi.herokuapp.com/films', true)

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
