//menu lateral
var menu_visible=false;
let menu = document.getElementById ("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//siesta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}    

//oculto el menu 
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//barras
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);

    }   
}
let Netbeans = document.getElementById("Netbeans");
crearBarra(Netbeans);
let Microsoftproyect = document.getElementById("Microsoft proyect");
crearBarra(Microsoftproyect);

let PHP = document.getElementById("PHP");
crearBarra(PHP);
let Java = document.getElementById("Java");
crearBarra(Java);
let SQLserver = document.getElementById("SQL server");
crearBarra(SQLserver);
let Oracle = document.getElementById("Oracle");
crearBarra(Oracle);

let contadores = [-1,-1,-1,-1,-1,-1];

let entro = false;

function efectohabilidades(){
    var habilidaddes = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidaddes.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalNetbeans = setInterval(function(){
            pintarBarra(Netbeans, 16, 0, intervalNetbeans);
        },100);
        const intervalMicrosoftproyect = setInterval(function(){
            pintarBarra(Microsoftproyect, 11, 1, intervalMicrosoftproyect);
        },100);
        const intervalPHP= setInterval(function(){
            pintarBarra(PHP, 11, 2, intervalPHP);
        },100);
        const intervalJava= setInterval(function(){
            pintarBarra(Java, 15, 3, intervalJava);
        },100);
        const intervalSQLserver= setInterval(function(){
            pintarBarra(SQLserver, 16, 4, intervalSQLserver);
        },100);
        
    }
}        

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByclassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}    

window.onscroll = function(){
    efectohabilidades();
}

