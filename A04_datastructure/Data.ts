namespace shoppingList {

    export interface Item {
        name: string;
        amount: number;
        comment: string;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        
    };
}