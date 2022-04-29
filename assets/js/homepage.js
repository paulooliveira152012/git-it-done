/*
1 - create a variable.
2 - attribute an annonimous functionto this variable.
3 - use the fetch method to get fetch objects from a server API
4 - create a second variable for the response which equals the same link
    console log the response variable
5 - call this funtion
 */
var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };
  
  getUserRepos("paulooliveira152012")
