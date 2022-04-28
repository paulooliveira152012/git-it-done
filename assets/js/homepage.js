/*
1 - create a variable.
2 - attribute an annonimous functionto this variable.
3 - use the fetch method to get fetch objects from a server API
4 - create a second variable for the response which equals the same link
    console log the response variable
5 - call this funtion
 */
var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos").then(function(response) {
        //format the response in order to use the data in the code using json()
        response.json().then(function(data){
            console.log(data);
        });
        console.log("inside", response);
    });

    var response = fetch("https://api.github.com/users/octocat/repos");
    console.log(response);
  };
  
  getUserRepos();
