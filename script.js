let button = document.querySelector(".button")
let textCard = document.querySelector(".textCard")
button.addEventListener("click",function(){
    getData();
})

async function getData() {
    let response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')    
    let ans = await response.json();
    textCard.innerHTML = `<p>${ans.text}</p>`
}