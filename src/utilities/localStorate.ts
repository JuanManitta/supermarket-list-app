import { SupermarketList } from "../types/Types";

const supermarketData =[
    {
        name: 'Meat',
        img:'../home-meat.svg',
        items: [],
        isActive: true
    },
    {
        name: 'Vegetables',
        img:'../home-veggie-dark.svg',
        items: [],
        isActive: false
    },
    {
        name: 'Fruits',
        img:'../home-fruit-dark.svg',
        items: [],
        isActive: false
    },
    {
        name: 'Dairy',
        img:'../home-milk.svg',
        items: [],
        isActive: false
    },
    {
        name: 'Drinks',
        img:'../home-water.svg',
        items: [],
        isActive: false
    },
    {
        name: 'Others',
        img:'../home-others.svg',
        items: [],
        isActive: false
    },
];


export const saveProducts = (supermarketList: SupermarketList[]) => {
    localStorage.setItem('supermarketList', JSON.stringify(supermarketList));
    console.log(supermarketList);
    
};

export const getProducts = () => {
    const supermarketList = localStorage.getItem('supermarketList');
    if (supermarketList) {
        return JSON.parse(supermarketList);
    }
    return supermarketData;
}