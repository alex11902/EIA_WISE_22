/*
Aufgabe: Aufgabe 2 EventInspektor
Name: Alexander Holstein
Matrike: 271466
Datum: 22.10.2022
Quellen: Hilfe von Henning Pils bekommen
*/


namespace EventInspektor {
    
window.addEventListener("load", handleLoad );


function handleLoad( _event: Event ): void {

    let div0: HTMLElement = <HTMLElement>document.querySelector("div0");
    let div1: HTMLElement = <HTMLElement>document.querySelector("div1");


    document.addEventListener( "mousemove" , setInfoBox );
    document.addEventListener( "click" , logInfo );
    document.addEventListener( "keyup", logInfo);

    document.body.addEventListener( "click" , logInfo );
    document.body.addEventListener( "keyup", logInfo );

    div0.addEventListener("click" , logInfo );

    div0.addEventListener("keyup", logInfo );

    div1.addEventListener("click", logInfo);

    div1.addEventListener("keyup", logInfo);

}

function setInfoBox( _event: MouseEvent ): void {

    let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
    console.log(span);

    let posX: string = `${ _event.clientX }`;
    let posY: string = `${ _event.clientY }`;
    span.innerHTML = `X: ${posX}, Y: ${posY}, Target: ${_event.target}`;

    let offsetX: number = _event.clientX + 15;
    let offsetY: number = _event.clientY + 15;
    span.style.left = `${offsetX}px`;
    span.style.top = `${offsetY}px`;

}


function logInfo( _event: Event ): void {

    console.log( _event.type );
    console.log( _event.target );
    console.log( _event.currentTarget );
    console.log( _event );

}

function customEvent( _event: CustomEvent ): void {

    

}

 


}