let Desplegar_Features=document.querySelector(".Lista_Features");
let Abrir_Features=document.querySelector(".Features");
let FlechaArriba_Features=document.querySelector(".Flecha_Features");
let Desplegar_Company=document.querySelector(".Lista_Company")
let Abrir_Company=document.querySelector(".Company")
let FlechaArriba_Company=document.querySelector(".Flecha_Company")

Abrir_Features.addEventListener("click",function(){
    Desplegar_Features.classList.toggle("Listado_Features")
    if (Desplegar_Features.classList.contains("Listado_Features")){
        FlechaArriba_Features.src="images/icon-arrow-up.svg";
    }
    else{
        FlechaArriba_Features.scr="images/icon-arrow-down.svg";
    }
})
Abrir_Company.addEventListener("click",function(){
    Desplegar_Company.classList.toggle("Listado_Features")
    if (Desplegar_Company.classList.contains("Listado_Features")){
        FlechaArriba_Company.src="images/icon-arrow-up.svg";
    }
    else{
        FlechaArriba_Company.scr="images/icon-arrow-down.svg";
    }
})
