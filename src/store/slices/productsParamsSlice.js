import {createSlice} from "@reduxjs/toolkit";


const productsParamsSlice = createSlice({
  name: 'productsParams',

  initialState: {
    cardsPerPage: 8,
    activeTab: 1,
    filter: {
      published: 'ALL',

    }
  },

  reducers: {
    changeCardsPerPage(state, action) {
      state.cardsPerPage = action.payload
    },


  }
})

export default productsParamsSlice.reducer

export const {changeCardsPerPage} = productsParamsSlice.actions