let btnSi = document.getElementById("btnSi");
let btnNo = document.getElementById("btnNo");
let h3opcion = document.getElementById("h3opcion");
let imgMuñoz = document.getElementById("imgMuñoz");
let numeroIntentos = 0;

btnNo.onclick = function(){
  switch (numeroIntentos){
    case 0:
      imgMuñoz.src = "./imgs/Muñoz3.jpg";
      btnNo.innerText = "Estoy segura";
      btnNo.style.fontSize = "25px";
    break;
    case 1:
      imgMuñoz.src = "./imgs/Muñoz4.jpg";
      btnNo.innerText = "Me voy con ayala";
      btnNo.style.fontSize = "22px";
    break;
    case 2:
      imgMuñoz.style.objectPosition = "bottom";
      imgMuñoz.src = "./imgs/Muñoz5.jpg";
      btnNo.innerText = "Tengo miedo";
    break;
    default:
      imgMuñoz.src = "./imgs/MuñozMalo.jpg";
      btnNo.addEventListener("click", redireccion)
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