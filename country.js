var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
    var data = JSON.parse(this.response);
    for (var x of data) {
        console.log(x.name);
        console.log(x.capital);
        console.log(x.flag);
        console.log(x.languages);
    }
}