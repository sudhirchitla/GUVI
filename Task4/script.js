// 1. create a request variable
var request = new XMLHttpRequest();
// 2. create a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
// 3. send the connection
request.send();
// 4. register a event listener. once the data is ready, 
request.onload = function () {
    var countrydata = JSON.parse(this.response);
    
    console.log(countrydata[104].currencies[0].code);

//  List of countries 
//countrydata.forEach(element => console.log(element.name, element.currencies));
/*
//  List of countries and link for country flag    
    countrydata.forEach(element => console.log(element.name, element.flag));

    
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


// Get all the countries from Asia continent or “region” using Filter function.
countrydata.filter(element => {
    if (element.region = 'Asia')
    console.log(element.name, element.region);
});


// Get all the countries with population of less than 2 lacs using Filter function.
countrydata.filter(element => {
    if (element.population < 200000) 
    console.log(element.name, element.population);
} );


// Print the following details name, capital, flag using forEach function.
countrydata.forEach(element => console.log(element.name, element.capital, element.flag));

// Print the total population of countries using reduce function.
let total = countrydata.reduce((acc, ele) => {return acc + ele.population}, 0);
console.log(total);

// Print the country which uses US Dollars as currency.
countrydata.filter(element => {
    if (element.currencies[0].code === 'USD')
    console.log(element.name, element.currencies[0].code);
});


}