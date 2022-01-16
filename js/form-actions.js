server_url = "http://127.0.0.1:5000"

function searchName() {
    nameToSearch = document.getElementById("name-to-search-for");
    
    var url = server_url + "/search/" + nameToSearch.value
    console.log(url)
    // var response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
    // if (response.ok){
    //     console.log(response);
    // }
    // else {
    //     console.log(response.statusText);
    // }
    //console.log(response);
    fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(function(response) {
        if (response.status !== 200) {
            console.log("Problem: " + response.statusText);
            return;
        }
        response.json().then(function(data) {
            console.log(data);
        });
    })
    .catch(function(err) {
        console.log("Fetch Error :-S", err);
    })
}