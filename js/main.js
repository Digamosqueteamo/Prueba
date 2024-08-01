let btnSi = document.getElementById("btnSi");
let btnNo = document.getElementById("btnNo");
let dvText = document.getElementById("dvText");
let imgMuñoz = document.getElementById("imgMuñoz");
let numeroIntentos = 0;

btnNo.onclick = function(){

  switch (numeroIntentos){
    case 0:
      imgMuñoz.src = "./imgs/Muñoz3.jpg";
      btnNo.innerText = "Estoy segura";
      btnNo.style.fontSize = "20px";
      //btnNo.style.width = "150px";
      //btnNo.style.height = "60px";
    break;
    case 1:
      imgMuñoz.src = "./imgs/Muñoz4.jpg";
      btnNo.innerText = "Me voy con ayala";
      btnNo.style.fontSize = "17px";
      //btnNo.style.width = "200px";
    break;
    case 2:
      imgMuñoz.src = "./imgs/Muñoz5.jpg";
      imgMuñoz.style.objectPosition = "bottom";
      btnNo.innerText = "Tengo miedo";
      //btnNo.style.width = "150px";
    break;
    default:
      imgMuñoz.src = "./imgs/MuñozMalo.jpg";
      btnNo.addEventListener("click", redireccion)
      btnNo.innerText = "ZI";
      //btnNo.style.width = "100px";
      //btnNo.style.height = "50px";
    break;
  }
 
 numeroIntentos++;
}

btnSi.addEventListener("click", redireccion)

function redireccion(){
  window.location.href = "si.html";
}