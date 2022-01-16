server_url = "http://127.0.0.1:5000"

async function searchName() {
    nameToSearch = document.getElementById("name-to-search-for");
    console.log("Searching for " + nameToSearch.value);
    console.log(nameToSearch)
    var url = server_url + "/search/" + nameToSearch.value
    console.log(url)
    var response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
    if (response.ok){
        console.log(response);
    }
    else {
        console.log(response.statusText);
    }
    //console.log(response);
}
