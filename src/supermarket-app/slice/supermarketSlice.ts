import { createSlice } from '@reduxjs/toolkit'
import { createItem } from '../../models/item-model';
import { SupermarketList } from '../../types/Types'
import { saveProducts, getProducts } from '../../utilities/localStorate';

const supermarketList: SupermarketList[] = getProducts() || [];



export const supermarketSlice = createSlice({
  name: 'supermarketList',
  initialState: supermarketList,

  reducers: {
    
    addItem: (state, action) => {
        const { category, product, quantity } = action.payload;
        const creatingItem = createItem(product, quantity, category);
        
        const activeCategoryIndex = state.findIndex(item => item.name === category);
        state[activeCategoryIndex].items.push(creatingItem);
        saveProducts(state);
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