import { createSlice } from '@reduxjs/toolkit'

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    price: 9.99,
    addIngr: [],
    exIngrArr: [
      {name: 'tomatoes',price: 1.2},
      {name: 'salami',price: 1.5},
      {name: 'mushrooms',price: 1},
      {name: 'new',price: 1}
  ]
  },
  reducers: {
    addIngredients: (state, action) => {
      state.addIngr.push(action.payload)
    },
    addPrice: (state, action) => {
      state.price += action.payload 
    }
  },
})

export const { addIngredients } = pizzaSlice.actions
export const { addPrice } = pizzaSlice.actions
export const selectIngr = (state) => state.pizza.addIngr
export const exIngrArr = (state) => state.pizza.exIngrArr
export const price = (state) => state.pizza.price
export default pizzaSlice.reducer
