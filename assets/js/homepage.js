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
    fetch(apiUrl)
    .then(function(response) {
      //request was successful
      if (response.ok) {
        response.json().then(function(data) {
          displayRepos(data, user);
        });
      } else {
        alert("Error: GitHub User Not Found");
      }
    })
    //adding connectivity error alert
    .catch(function(error) {
      // Notice this `.catch()` getting chained onto the end of the `.then()` method
      alert("Unable to connect to GitHub");
    });
  };
  
  

  // checking input field and setting up submit button ------------------------------------------------------------------------------------

  //creating 2 variables, one for to refference the <form> and one for the <input>
  var userFormEl = document.querySelector("#user-form");
  var nameInputEl = document.querySelector("#username");

  //create a function to be executed upon submission
  var formSubmitHandler = function(event) {
    event.preventDefault();
 
    // get value from input element
    // trim() is useful if we accidentally leave a leading or trailing space in the <input> element, such as " octocat" or "octocat ".
  var username = nameInputEl.value.trim();

  //check that there's a value in that username variable.
  if (username) {
  getUserRepos(username);
  nameInputEl.value = "";
  } else {
  alert("Please enter a GitHub username");
  }
    console.log(event);
  };


  //add event listener
  userFormEl.addEventListener("submit", formSubmitHandler);

  //displaying information to the page ------------------------------------------------------------------------------------
  

  var displayRepos = function(repos, searchTerm) {
    // check if api returned any repos
  if (repos.length === 0) {
  repoContainerEl.textContent = "No repositories found.";
  return;
  }
    console.log(repos);
    console.log(searchTerm);
    // clear old content
  repoContainerEl.textContent = "";
  repoSearchTerm.textContent = searchTerm;

//the "fun" part... 
  // loop over repos
for (var i = 0; i < repos.length; i++) {
  // format repo name
  var repoName = repos[i].owner.login + "/" + repos[i].name;

  // create a container for each repo
  var repoEl = document.createElement("div");
  repoEl.classList = "list-item flex-row justify-space-between align-center";

  // create a span element to hold repository name
  var titleEl = document.createElement("span");
  titleEl.textContent = repoName;

  // append to container
  repoEl.appendChild(titleEl);

  // create a status element
  var statusEl = document.createElement("span");
  statusEl.classList = "flex-row align-center";

// check if current repo has issues or not
if (repos[i].open_issues_count > 0) {
  statusEl.innerHTML =
    "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
} else {
  statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
}

// append to container
repoEl.appendChild(statusEl);

  // append container to the dom
  repoContainerEl.appendChild(repoEl);
}

  };

  //creating two variables to refference the right column where content wil be displayed
  var repoContainerEl = document.querySelector("#repos-container");
  var repoSearchTerm = document.querySelector("#repo-search-term");

  // User Not DFound Error ------------------------------------------------------------------------------------