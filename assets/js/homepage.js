/*
1 - create a variable.
2 - attribute an annonimous functionto this variable.
3 - use the fetch method to get fetch objects from a server API
4 - call this funtion
 */
var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
  };
  
  getUserRepos();
