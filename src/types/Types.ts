


export interface Item {
    name: string,
    price: number,
    quantity: number,
    done: boolean,
    id: string,

};

export interface SupermarketList {
    name: string,
    img: string,
    items: Item[],
    isActive: boolean,
};