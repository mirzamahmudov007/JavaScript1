
let piyodaElement = document.querySelector(".piyoda");
let velikodaElement = document.querySelector(".velik");
let carElement = document.querySelector(".car");
let airplaneElement = document.querySelector(".airplane");


let piyodaPelement = document.createElement("p");

let velikdPelement = document.createElement("p");

let carPelement = document.createElement("p");

let airplanePelement = document.createElement("p");
function ozgartir() {
    let inputElement = document.getElementById('malumotInput');

    let malumot = inputElement.value;
    

    piyodaPelement.innerHTML = malumot / (3.6) + " SOAT";
    piyodaPelement.classList.add("time");
    piyodaElement.append(piyodaPelement);
    
    velikdPelement.innerHTML = malumot / 20.1 + " SOAT";
    velikdPelement.classList.add("time");
    velikodaElement.append(velikdPelement);

    carPelement.innerHTML = malumot / 70 + " SOAT";
    carPelement.classList.add("time");
    carElement.append(carPelement);

    airplanePelement.innerHTML = malumot / 800 + " SOAT";
    airplanePelement.classList.add("time");
    airplaneElement.append(airplanePelement);

    console.log(malumot);
}


function whiteBtn(){
    let bodyElement = document.querySelector("body");
    bodyElement.classList.add("bodyBlack");
    bodyElement.classList.remove("bodyWhite");

    let spanElement = document.querySelector("span");
    spanElement.classList.add("spanBlack");
    spanElement.classList.remove("spanWhite");

    let h1Element = document.querySelector("h1");
    h1Element.classList.add("h1Black");
    h1Element.classList.remove("h1White");

    let piyodaElement1 = document.querySelector(".piyoda");
    piyodaElement1.classList.add("piyodaBlack");


    let velikElement1 = document.querySelector(".velik");
    velikElement1.classList.add("piyodaBlack");


    let carElement1 = document.querySelector(".car");
    carElement1.classList.add("piyodaBlack");


    let airplaneElement1 = document.querySelector(".airplane");
    airplaneElement1.classList.add("piyodaBlack");


    let btn = document.querySelector(".hisoblashBtn");
    btn.classList.add("btnBlack");
    console.log(btn.classList);
}

function blackBtn(){
    let bodyElement = document.querySelector("body");
    bodyElement.classList.add("bodyWhite");
    bodyElement.classList.remove("bodyBlack");

    let spanElement = document.querySelector("span");
    spanElement.classList.add("spanWhite");
    spanElement.classList.remove("spanBlack");

    let h1Element = document.querySelector("h1");
    h1Element.classList.add("h1White");
    h1Element.classList.remove("h1Black");
}