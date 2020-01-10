let fs = require('fs')
var request = new XMLHttpRequest()


var city = document.getElementById("city").value;
var state = document.getElementById("state").value;
var country = document.getElementById("country").value;

if(fs.existsSync(filename)) {
      let data = fs.readFileSync(filename, 'utf8').split('\n')

      data.forEach((contact, index) => {
         let [ name, email ] = contact.split(',')
         addEntry(name, email)
      })

   } else {
      console.log("File Doesn\'t Exist. Creating new file.")
      fs.writeFile(filename, '', (err) => {
         if(err)
            console.log(err)
      }
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
