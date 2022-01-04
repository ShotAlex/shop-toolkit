import './App.module.scss';
import {Routes, Route, Outlet, Navigate} from 'react-router-dom'
import Layout from "../Layout/Layout";
import ProductsPage from "../../pages/ProductsPage";
import CreateProductPage from "../../pages/CreateProductPage";
import EditProductPage from "../../pages/EditProductPage";
import ProductPage from "../../pages/ProductPage";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAllProducts} from "../../store/slices/productsSlice";


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getAllProductRequest = () => {
      dispatch(getAllProducts())
    }

    getAllProductRequest()
  }, [])

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='products' element={<Outlet/>}>
          <Route index element={<ProductsPage/>} />
          <Route path="page=:page" element={<ProductsPage/>}/>
          <Route path=':id' element={<ProductPage/>}/>
        </Route>

        <Route path='create-product' element={<CreateProductPage/>}/>
        <Route path='edit-product/:id' element={<EditProductPage/>}/>

        <Route path="*" element={<Navigate to="/products" />}/>
      </Route>
    </Routes>
  );
}

export default App;