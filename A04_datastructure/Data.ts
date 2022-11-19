namespace shoppingList {

    export interface Item {
        name: string;
        amount: number;
        comment: string;
    }

    export let data: Item[] = [

    {

    name: "milch" ,
    amount: 5, 
    comment: "hafer"

    },

    {   
        
    name: "wasser",
    amount: 5,
    comment: "nur medium"
    }
        
    ];


}