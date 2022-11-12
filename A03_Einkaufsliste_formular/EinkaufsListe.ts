namespace EinkaufsListe {
    window.addEventListener( "load" , handleLoad );

    let submitButton: HTMLElement = <HTMLInputElement>document.getElementById("addItemSubmit");


    let deleteIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".deleteIcon"); 
    let editIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".editIcon");

    function handleLoad( _event: Event): void {
        
        submitButton.addEventListener("submit", addItem);

        for ( const icon of deleteIcons ) {
            icon.addEventListener("click", deleteItem);
        }

        for ( const icon of editIcons) {
            icon.addEventListener("click", editItem);
        }

    }

    function addItem(_event: Event): void {

        console.log("Item was added.");

    }

    function deleteItem(_event: Event): void {

        console.log("Item will now be deleted.");
    }

    function editItem(_event: Event): void {
        console.log("Item can now be edited.");

    }

}