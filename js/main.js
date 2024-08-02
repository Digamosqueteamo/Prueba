let btnSi = document.getElementById("btnSi");
let btnNo = document.getElementById("btnNo").addEventListener("click", no);
let h3opcion = document.getElementById("h3opcion");
let imgMuñoz = document.getElementById("imgMuñoz");
let videoMuñoz = document.getElementById("videoMuñoz");
let btnEaster = document.getElementById("btnEaster");
btnEaster.addEventListener("click", easterEgg);

let numeroIntentos = 0;

function no(){
  switch (numeroIntentos){
    case 0:
      btnEaster.style.display = "none";
      videoMuñoz.style.display = "none";
      imgMuñoz.style.display = "block";
      imgMuñoz.src = "./imgs/Muñoz3.jpg";
      btnNo.innerText = "Estoy segura";
      btnNo.style.fontSize = "25px";
    break;
    case 1:
      imgMuñoz.src = "./imgs/Muñoz4.jpg";
      videoMuñoz.style.display = "none";
      imgMuñoz.style.display = "block";
      btnNo.innerText = "Me voy con ayala";
      btnNo.style.fontSize = "22px";
    break;
    case 2:
      //imgMuñoz.style.objectPosition = "bottom";
      videoMuñoz.src = "./imgs/Muñoz5.jpg";
      imgMuñoz.style.display = "block";
      imgMuñoz.style.display = "none";
      btnNo.innerText = "Tengo miedo";
    break;
    default:
      imgMuñoz.src = "./imgs/MuñozMalo.jpg";
      videoMuñoz.style.display = "none";
      imgMuñoz.style.display = "block";
      btnNo.addEventListener("click", redireccion);
      h3opcion.style.opacity = "100%";
      btnNo.innerText = "ZI";
      btnNo.style.fontSize = "35px";
    break;
    }
    
    numeroIntentos++;
}

btnSi.addEventListener("click", redireccion)

function redireccion(){
  setTimeout(function(){
    window.location.href = "si.html";
  }, 100);
}

function easterEgg(){
  imgMuñoz.style.display = "none";
  videoMuñoz.style.display = "block";
}