// 1. create a request variable
var request = new XMLHttpRequest();
// 2. create a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
// 3. send the connection
request.send();
// 4. register a event listener. once the data is ready, 
request.onload = function () {
    var countrydata = JSON.parse(this.response);
    
    //console.log(countrydata[104]);

//  List of countries 
//  countrydata.forEach(element => console.log(element.name));

//  List of countries and link for country flag    
    countrydata.forEach(element => console.log(element.name, element.flag));

    /*
//  List of countries from Asia continent / region
    countrydata.forEach(element => {
        if (element.region = "Asia")
        console.log(element.name, element.region);
    });

//  List of countries where population is less than 2 lacs
    countrydata.forEach(element => {
        if (element.population < 200000)
        console.log(element.name, element.population);
    });    
*/


/*    
    document.getElementById('output').innerHTML = countrydata[104].flag;
    document.getElementById("output").innerHTML = countrydata[i].region.filter(checkRegion);
*/


}
