import { createSlice } from '@reduxjs/toolkit'
import { SupermarketList } from '../../types/Types'

const supermarketList: SupermarketList[] = [
    {
        name: 'meat',
        img:'../home-meat.svg',
        items: [],
        isActive: true
    },
    {
        name: 'vegetables',
        img:'../home-veggie-dark.svg',
        items: [],
        isActive: false
    },
    {
        name: 'fruits',
        img:'../home-fruit-dark.svg',
        items: [],
        isActive: false
    },
    {
        name: 'dairy',
        img:'../home-milk.svg',
        items: [],
        isActive: false
    },
    {
        name: 'drinks',
        img:'../home-water.svg',
        items: [],
        isActive: false
    },
    {
        name: 'others',
        img:'../home-others.svg',
        items: [],
        isActive: false
    },
];



export const supermarketSlice = createSlice({
  name: 'supermarketList',
  initialState: supermarketList,

  reducers: {
    
    addItem: (state, action) => {
        console.log('action.payload', action.payload);
        
    },
    activeCategory: (state, action) => {
        const category = action.payload;
        state.filter( item => item.name === category).map( item => item.isActive = true);
        state.filter( item => item.name !== category).map( item => item.isActive = false);
    },
  },
})

export const { addItem, activeCategory } = supermarketSlice.actions

export default supermarketSlice.reducer