

var tvmazeUri = 'http://api.tvmaze.com/search/shows?q=';

var tvmazeSearchResult = [];
var tvmazeInfo = '';


async function showSearch(myInfo) {

    console.log(myInfo);
    let tvmazeResponse = await fetch(tvmazeUri+myInfo);
    let tvmazeData = await tvmazeResponse.json();

    console.log( tvmazeData );

    //document.getElementById('showContent').remove();
    document.getElementById("showContent").innerHTML = '';

    tvmazeData.forEach(element => { 

        let showContents = document.getElementById('showContent');   // Content holder

        let col = document.createElement("div");    
        col.setAttribute("class", "col-2 p-2 bg-light ");   
        //col.style = "margin:2px; border-radius:2px; border:solid 0px black;  ";
        //showContents.append(col);

        let img = document.createElement("img");

        if (element.show.image != null) 
          img.src = element.show.image.original;
          else
          img.src = 'https://via.placeholder.com/200x300';

        let title = document.createElement("p");
        //title.innerHTML= "Name : ".bold()+ element.show.name;
        title.innerHTML= element.show.name.bold();

        if (element.show.premiered != null) 
        title.innerHTML += '<br>'+'Date:'.bold()+element.show.premiered;
        else
        title.innerHTML += '<br>'+' ';

        if (element.show.network != null) 
        title.innerHTML += '<br>'+'Network:'.bold()+element.show.network.name;
        else
        title.innerHTML += '<br>'+' ';

        title.innerHTML += '<br>'+'Genres:'.bold();

        if (element.show.genres.length != 0)
          element.show.genres.forEach(elementGen => {
            title.innerHTML += elementGen + ' ';
          });
          

        col.append(img, title);
        showContents.append(col);
        //showContent.append(div);

        //console.log(element.show.name, img.src);
    });
    //showContent

    

    //document.getElementById('myInfo').innerHTML = tvmazeInfo;
 

 
}





//  showSearch();

