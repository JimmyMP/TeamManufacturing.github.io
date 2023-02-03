let MenuVisible = false;
// FUNCION QUE OCULTA O MUESTRA EL MENU
function mostrarOcultarMenu(){
    if(MenuVisible){
        document.getElementById("nav").classList="";
        MenuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        MenuVisible=true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList="";
    MenuVisible=false;
}

//FUNCION QUE APLICA LAS ANIMACIONES DE LAS SKILLS
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("phyton");
        habilidades[4].classList.add("r");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoEquipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyecto");
        
    }
}


//Detecto el scrolling para aplicar la animacion de la barra de skills
window.onscroll = function(){
    efectoHabilidades();
}