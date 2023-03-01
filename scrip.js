//funcion que muestra el menu responsive//

function seleccionar(link){
    var opciones = document.querySelectorAll('#link a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //desaparece el menu cuando no esta seleccionado//

    var x = document.getElementById("nav");
    x.className = "";

}

function responsiveMenu() {
    var x = document.getElementById("nav")
    if(x.className---""){
        x.className = "responsive";
    }else{
        xclassName = "";
    }
}

//detecto el scrolling para aplicar la animacion de las barras de habilidades//

window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica la animacion de la barra de habilidades//

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}