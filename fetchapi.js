//set Headers
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", "36b05637-1b3b-46d2-8e11-5f0a99d9cb19");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

//Initialise the card (so it doesn't stay blank)
let i = 0; 
Fetch();
var button = document.getElementsByClassName('button')[0];
var buttonLeft = document.getElementsByClassName('w3-button w3-left')[0];
var buttonRight = document.getElementsByClassName('w3-button w3-right')[0];


//Button to move backwards
buttonLeft.addEventListener('click', function(){
i--;
 Fetch();
});


//Button to move forwards
buttonRight.addEventListener('click', function(){
i++;
Fetch();
});

//Generate random cat
button.addEventListener('click', function(){
i++;

Fetch();
});

//Fetch  data from  api
function Fetch(){
  data = fetch("https://api.thecatapi.com/v1/breeds", requestOptions)
    .then(response => response.json())
    .then(data => {

      if (i < 0) {
        i = data.length - 1;
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
  
      let em = document.getElementById('temperament');
      em.innerHTML = data[i].temperament;
  
      let div = document.getElementById('life_span');
      div.innerHTML = data[i].life_span + " average life span";
  
      let div2 = document.getElementById('weight')
      div2.innerHTML = data[i].weight.metric + " kgs";
  
      let ImgElement  = document.getElementById('imgElement');
      ImgElement.src = (`${imgUrl}`)
      } if (i > data.length - 1) {
        i = 0;
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
  
      let em = document.getElementById('temperament');
      em.innerHTML = data[i].temperament;
  
      let div = document.getElementById('life_span');
      div.innerHTML = data[i].life_span + " average life span";
  
      let div2 = document.getElementById('weight')
      div2.innerHTML = data[i].weight.metric + " kgs";
  
      let ImgElement  = document.getElementById('imgElement');
      ImgElement.src = (`${imgUrl}`)
      } else {
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
  
      let em = document.getElementById('temperament');
      em.innerHTML = data[i].temperament;
  
      let div = document.getElementById('life_span');
      div.innerHTML = data[i].life_span + " average life span";
  
      let div2 = document.getElementById('weight')
      div2.innerHTML = data[i].weight.metric + " kgs";
  
      let ImgElement  = document.getElementById('imgElement');
      ImgElement.src = (`${imgUrl}`)
      }
   
    })
    .catch(error => console.log('error', error));
   
  }
  