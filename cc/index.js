
var restURI = 'https://restcountries.eu/rest/v2/all';
var exchURI = 'https://api.exchangeratesapi.io/latest';

var restDataValues = [];
var result = [];
var result1 = [];
var mycode = '';
var currList = "<option value='EUR'>EUR</option>";

async function fetchInfo () {

    // restContries data 
    let restResponse = await fetch(restURI);
    let restData = await restResponse.json();

    restData.forEach(element => { 
        restDataValues.push([element.name,element.alpha3Code,element.currencies[0].code,element.currencies[0].symbol,element.flag]);
        
    });

    // eschange rates data
    let exchResponse = await fetch(exchURI);
    let exchData = await exchResponse.json();
    result = Object.entries(exchData.rates);

    //let baseCurr = exchData.base;

    // generate dropdown list from the currency codes
    result.forEach(element => {
        currList += "<option value='"+element[0]+"'>"+element[0]+"</option>";

    }); 

    document.getElementById('curSelect').innerHTML = currList;

    // display currency conversion data using base currency as EUR
    result.forEach(element => { 
        mycode += "<div class='col-2  '>" + element[0] + "</div>" + "<div class='col-2'>" + element[1].toFixed(4) +"</div>";
    });    
    
    document.getElementById('currData').innerHTML = mycode;
    document.getElementById('date').innerHTML = exchData.date;
 
}


// display data based on the selected amount
function changeData(value){
    mycode = '';
    result.forEach(element => { 
        let val = element[1]*value;
        mycode += "<div class='col-2  '>" + element[0] + "</div>" + "<div class='col-2'>" + val.toFixed(4) +"</div>";
    });    
    document.getElementById('currData').innerHTML = mycode;
}

// retrive and display exchange rates based on base currency code
async function setBaseCurr(myCurr) {
    let amount = document.getElementById('cVal').value;
    let exchResponse = await fetch(exchURI + '?base=' + myCurr);
    let exchData = await exchResponse.json();
    result = Object.entries(exchData.rates);
    changeData(amount);
}


fetchInfo();


/* 
    let getdata = async function(url) {
    try{
        let data = await fetch(url);
        data = await data.json();
        return data;
    }
    catch(err)
    {
        console.log(err);
    }
}
 */

    /*  

    let cc = restData[104].currencies[0].code;

    console.log(restData);
    console.log(restData[104]);
    console.log(restData[104].alpha3Code);
    console.log(restData[104].currencies[0].code);

    console.log(restDataValues[104]);

    result.forEach(element => { console.log(baseCurr + ' to ' + element[0], element[1].toFixed(4));});

    document.getElementById('info').innerHTML=  "<img src='"+restData[239].flag+"' alt='USA'>" + exchData.base + ' to ' 
    + "<img src='"+restData[104].flag+"' alt='India'> " + ' ' + restData[104].currencies[0].symbol + ' ' + rate.toFixed(4) + cc;  

    console.log(exchData.rates);
    let rate = exchData.rates.INR;
    console.log(rate);
    console.log(exchData.base + ' to ' + cc + ' ' + rate.toFixed(4));

    */


/*
        // 1. create a request variable
        var request = new XMLHttpRequest();
        // 2. create a connection
        request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
        // 3. send the connection
        request.send();
        // 4. register a event listener. once the data is ready
        var myData;

        request.onload = function () {

            myData = JSON.parse(this.response);
            console.log(myData[104]);
        }
*/

 

    /*
    let info1 = getdata(`https://api.exchangeratesapi.io/latest`).then((data)=>{
    console.log(data.rates);
    });

    exchData.then(exchData => {
        exchData; // fetched movies
      });
    
    console.log(exchData);
    */


    
/*
    exchData.then((exchData)=>{
        let rate = exchData.rates.INR;
        document.getElementById('info').innerHTML= restData[104].name + ' ' + cc + ' ' + rate;
    });
*/



    /*
    console.log(exchData.rates.INR);

    let curr_rate=exchData.rates.USD;
    console.log(curr_rate);
    */

    /*
    console.log(exchData);
    console.log(exchData.date);

    console.log(Object.keys(exchData));
    console.log(Object.values(exchData));
    console.log(Object.entries(exchData));

    console.log(Object.keys(exchData.rates));
    console.log(Object.values(exchData.rates));
*/