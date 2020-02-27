$("#submit").click(function(){
  var city = $("#city").text();
  var country = $("#country").text();
  var url = "";
  $.get(url, function(data, status){
    var info = JSON.parse(data);
    var dhuhr = info.data.timings.dhuhr;
  });
});