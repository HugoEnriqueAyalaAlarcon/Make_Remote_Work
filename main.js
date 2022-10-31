let Text_Completo_getyour ="Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar, without sacrificing efficiency. have your entire work team under control, but without limiting their creativity since they can work from home";
let Text_less_getyour="Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar. ";
console.log(document.getElementById("contener__text-parafo-dinamico"));

function button_learn_less(){
    /*alert("botton")*/
    document.getElementById("contener__text-parafo--dinamico").innerHTML=Text_less_getyour;
    document.getElementById("contener__text-button--dinamico").innerHTML="learn more";
    document.getElementById("contener__button-onclik").onclick = function(){button_learn_more();}
}

function button_learn_more(){
    document.getElementById("contener__text-parafo--dinamico").innerHTML=Text_Completo_getyour;
    document.getElementById("contener__text-button--dinamico").innerHTML="learn less";
    document.getElementById("contener__button-onclik").onclick = function(){button_learn_less();}
}

document.getElementById("contener__button-onclik").onclick = function(){button_learn_more();}
/**
let Cambia_texto_resultado="texto cambiado";
function boton(){
    document.getElementById("resultado").innerHTML=Cambia_texto_resultado;
}
document.getElementById("boton-a").onclick = function(){boton();}
document.getElementById("boton-p").onclick = function(){boton();}*/
/*learn less aprende menos*/ 