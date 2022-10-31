let Text_Completo_getyour ="Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar, without sacrificing efficiency. have your entire work team under control, but without limiting their creativity since they can work from home";
let Text_less_getyour="Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar. ";
let button_Status=0;
let registro_Status=0;

/*******************************variables ****************************/
let user="",cUser="",
pass="",cPass="",
card,
button__Login,
button__submint,
button__cancel,
button__Register;

/**********************************llamado de elementos ***************/
card=document.getElementById("card");
button__Login=document.getElementById("button__Login");
button__submint=document.getElementById("button__submint");
button__cancel=document.getElementById("button__cancel");
button__Register=document.getElementById("nav__Botton-Register");
button__Learn=document.getElementById("contener__button-onclik"); /*cambiar id*/

/**************************************funciones*******************************/
let getData=function(){
    if (registro_Status==1){
        user=document.getElementById("card__user").value;
        pass=document.getElementById("card__pass").value;
        alert("usuario registrado")
        card.style.display="none";
    }
    if (registro_Status==0){
        cUser=document.getElementById("card__user").value;
        cPass=document.getElementById("card__pass").value;
        if(cUser==user && cPass==pass && cUser!=""  && cPass!=""){
            alert("Bienvenido "+user);
            card.style.display="none";
            button__Login.innerHTML=user;
            button__Login.style.color="black";
        }
    }
}
let register=function(){
    card.style.display="flex";
    registro_Status=1;

}
let noCardVisible=function(){
    card.style.display="none";
}
let cardVisible=function(){
    card.style.display="flex";
    registro_Status=0;
}
let muestraMas=function(){ //***variable muestraMas como funcion */
    console.log(button_Status);
    if(button_Status==0){
        document.getElementById("contener__text-parafo--dinamico").innerHTML=Text_Completo_getyour;
        document.getElementById("contener__text-button--dinamico").innerHTML="learn less";
        button_Status=1;
        console.log(button_Status);
    }else{
        document.getElementById("contener__text-parafo--dinamico").innerHTML=Text_less_getyour;
        document.getElementById("contener__text-button--dinamico").innerHTML="learn more";
        button_Status=0;
    }
}


//////////*****************llamar funciones con clik ************************/
button__Login.onclick=cardVisible;
button__submint.onclick=getData;
button__cancel.onclick=noCardVisible;
button__Learn.onclick=muestraMas;
button__Register.onclick=register;

