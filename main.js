function ozgartir() {
    // Input elementini tanlash
    let inputElement = document.getElementById('malumotInput');

    // Inputdan kelgan malumotni olish
    let malumot = inputElement.value;

    // Malumotni o'zgartirish (misol uchun kichik harflarga o'zgartiramiz)
    let yangiMalumot = malumot.toLowerCase();

    // Yangi malumotni inputga qo'yish
    inputElement.value = yangiMalumot;
    let  piyodaElement = document.querySelector(".piyoda");
    let velikodaElement = document.querySelector(".velik");
    let carElement = document.querySelector(".car");
    let airplaneElement = document.querySelector(".airplane");

    let piyodaPelement = document.createElement("p");
    piyodaPelement.innerHTML = malumot / (3.6) + " SOAT";
    piyodaPelement.classList.add("time");
    piyodaElement.append(piyodaPelement);
    
    let velikdPelement = document.createElement("p");
    velikdPelement.innerHTML = malumot / 20.1 + " SOAT";
    velikdPelement.classList.add("time");
    velikodaElement.append(velikdPelement);

    let carPelement = document.createElement("p");
    carPelement.innerHTML = malumot / 70 + " SOAT";
    carPelement.classList.add("time");
    carElement.append(carPelement);

    let airplanePelement = document.createElement("p");
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

    console.log("Hi");
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