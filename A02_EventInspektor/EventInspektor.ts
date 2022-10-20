namespace EventInspektor {
    
window.addEventListener("load", handleLoad );

let div0: HTMLElement|null = document.getElementById("div0");
let div1: HTMLElement|null = document.getElementById("div1");

function handleLoad() {

    document.addEventListener( "mousemove" , setInfoBox );


}

function setInfoBox( _event:MouseEvent ) {

document.body.addEventListener( "click" , logInfo );

document.body.addEventListener( "keyup", logInfo );

document.addEventListener( "click" , logInfo );

document.addEventListener( "keyup", logInfo );

div0?.addEventListener("click" , logInfo );

div0?.addEventListener("keyup", logInfo );

div1?.addEventListener("click", logInfo);

div1?.addEventListener("keyup", logInfo);

}


function logInfo( _event:Event ) {

    console.log();

}


 


}