exports.login = function(user, onSuccess) {
  var url = "http://drutan01.44cloud.info/api/rest/user/login.json";
  var xhr = Ti.Network.createHTTPClient({timeout: 5000});
  alert(user);
  xhr.onload = function() {
    Ti.API.info("Status: " + xhr.status);
    var response = JSON.parse(xhr.responseText);
    onSuccess(response);
  }
  
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhr.send(JSON.stringify(user));
}

exports.logout = function(user, onSuccess) {
  var url = "http://drutan01.44cloud.info/api/rest/user/logout.json";
  var xhr = Ti.Network.createHTTPClient({timeout: 5000});
  alert(user);
  xhr.onload = function() {
    Ti.API.info("Status: " + xhr.status);
    var response = JSON.parse(xhr.responseText);
    onSuccess(response);
  }
  
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhr.send();
}
