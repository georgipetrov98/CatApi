var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", "36b05637-1b3b-46d2-8e11-5f0a99d9cb19");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
let i = 0; 

let catsDiv = document.getElementsByClassName('CatImageHolder')[0];
catsDiv.innerHTML = '';


i++;

fetch("https://api.thecatapi.com/v1/breeds", requestOptions)
  .then(response => response.json())
  .then(data => {


   
    

    let countryCode = data[i].country_code;

    let imgUrl = data[i].image.url;
    let img = document.getElementById('flag');
    img.src = (`https://flagcdn.com/16x12/${countryCode.toLowerCase()}.png`);


    console.log(data[i])
    let h1 = document.getElementById('h1');
    h1.innerHTML = data[i].name;

    let p = document.getElementById('p');
    p.innerHTML = data[i].description;

    let span = document.getElementById('origin')
   span.innerHTML = data[i].origin;

    let ImgElement  = document.getElementById('imgElement');
    ImgElement.src = (`${imgUrl}`)

    
  })
  .catch(error => console.log('error', error));
   console.log(i)

var button = document.getElementsByClassName('button')[0];


button.addEventListener('click', function(){
console.log("you clicked me");

let catsDiv = document.getElementsByClassName('CatImageHolder')[0];
catsDiv.innerHTML = '';


i++;

fetch("https://api.thecatapi.com/v1/breeds", requestOptions)
  .then(response => response.json())
  .then(data => {


   
    

    let countryCode = data[i].country_code;

    let imgUrl = data[i].image.url;
    let img = document.getElementById('flag');
    img.src = (`https://flagcdn.com/16x12/${countryCode.toLowerCase()}.png`);


    console.log(data[i])
    let h1 = document.getElementById('h1');
    h1.innerHTML = data[i].name;

    let p = document.getElementById('p');
    p.innerHTML = data[i].description;

    let span = document.getElementById('origin')
   span.innerHTML = data[i].origin;

    let ImgElement  = document.getElementById('imgElement');
    ImgElement.src = (`${imgUrl}`)

    
  })
  .catch(error => console.log('error', error));
   console.log(i)
});


