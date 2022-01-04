import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createProductApi, deleteProductApi, getAllProductsApi, updateProductApi} from "../../api";


export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    return  getAllProductsApi()
  }
)

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (obj, {dispatch}) => {
    const {id, data} = obj
    return updateProductApi(id, data)
  }
)

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (product) => {
    const createAt = (new Date()).getTime()
    const data = {
      ...product,
      id: createAt,
      createAt: createAt.toString(),
    }

    return createProductApi(data)
  }
)

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id) => {
    return  deleteProductApi(id)
  }
)

const productsSlice = createSlice({
  name: 'products',

  initialState: {
    data: [],
    isLoaded: false,
    error: '',
  },

  reducers: {
    // addProduct(state, action) {
    //   const createAt = (new Date()).getTime()
    //   const newProduct = {
    //     ...action.payload,
    //     id: createAt,
    //     createAt: createAt.toString(),
    //   }
    //   state.data.push(newProduct)
    // },
    //
    // removeProduct(state, action) {
    //   const id = +action.payload
    //   state.data = state.data.filter(el => {
    //     return el.id !== id
    //   })
    // },
    //
    // saveEditProduct(state, action) {
    //   const product = action.payload
    //   const id = +product.id
    //
    //   state.data = state.data.map(el => {
    //     if (el.id === id) {
    //       return product
    //     }
    //     return el
    //   })
    // },
  },

  extraReducers: {
    // GET All Products
    [getAllProducts.pending]: (state, action) => {
      state.isLoaded = false
      state.error = ''
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.data = action.payload.data
      state.isLoaded = true
    },
    [getAllProducts.rejected]: (state, action) => {
      state.isLoaded = true
      state.error = 'Ошибка :('
    },

    // TODO: add pending and rejected statuses
    // UPDATE product
    [updateProduct.fulfilled]: (state, action) => {
      const product = action.payload.data
      const id = +product.id

      state.data = state.data.map(el => {
        if (el.id === id) {
          return product
        }

        return el
      })
    },

    // CREATE product
    [createProduct.fulfilled]: (state, action) => {
      // state.data.push(action.payload.data)
      const product = action.payload.data
      const id = +product.id

      state.data = state.data.map(el => {
        if (el.id === id) {
          return product
        }

        return el
      })
    },

    // DELETE product
    [deleteProduct.fulfilled]: (state, action) => {
      const id = action.payload.data.id

      state.data = state.data.filter(el => {
        return el.id !== id
      })
    },
  },
})

export default productsSlice.reducer

// export const {addProduct, removeProduct, saveEditProduct} = productsSlice.actions