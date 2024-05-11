
let btn = document.querySelector(".generate");

const changecolor = () => {

    let red = Math.floor(Math.random() * 255 + 1);

    let green = Math.floor(Math.random() * 255 + 1);

    let black = Math.floor(Math.random() * 255 + 1);

    

    let color = document.querySelector(".color");

    let retcol = document.querySelector(".return");
    color.style.backgroundColor = `rgb(${red},${green},${black})`;
    retcol.innerText = `rgb(${red},${green},${black})`;


}

btn.onclick = changecolor;