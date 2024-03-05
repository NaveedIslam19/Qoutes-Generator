const displayQoutes = document.querySelector(".displayQoutes");
const Author = document.querySelector(".author");
const newQoute = document.querySelector("#newQoute");
const twitter = document.querySelector("#twitter");


const Api_Qoutes = "https://api.quotable.io/random";


async function displayData(url){
      let api = await fetch(url);
      let data = await api.json();
      displayQoutes.innerHTML = data.content
      Author.innerHTML = data.author
};

function tweet(){
    window.open( href="https://twitter.com/intent/tweet?text= +  displayQoutes.innerHTML", "tweet window", "width= 600, height=500")
}


displayData(Api_Qoutes);