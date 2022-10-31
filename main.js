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


/*********boton login */
let user="Funval",cUser,
    pass="Funval",cPass,
    button,button__Login,card;
button=document.getElementById("button__submint");
button__Login=document.getElementById("button__Login");
card=document.getElementById("card");
console.log(button);

let getData=function(){
    cUser=document.getElementById("card__user").value;
    cPass=document.getElementById("card__pass").value;
    console.log(cUser);
    console.log(cPass);
    if(cUser=="Funval" && cPass=="Funval"){
        alert("Bienvenido")
        card.style.display="none";
        button__Login.innerHTML="Funval";
        button__Login.style.color="black";
    }
}
let cardVisible=function(){
    card.style.display="flex";
}

button.onclick=getData;
button__Login.onclick=cardVisible;
console.log(cUser);