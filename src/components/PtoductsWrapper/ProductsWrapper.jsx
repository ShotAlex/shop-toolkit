import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Button from "../Button/Button";
import Tabs from "../Tabs/Tabs";
import ProductsList from "../ProductsList/ProductsList";
import {getAllProducts} from "../../store/slices/productsSlice";


const ProductsWrapper = () => {
  const {data, isLoaded, error} = useSelector(state => state.products)
  const {cardsPerPage} = useSelector(state => state.productsParams) // activeTab

  const dispatch = useDispatch()
  const currentPage = useParams().page || 1
  // const [isPublished, setIsPublished] = useState(true)


  if (!isLoaded) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return (
      <>
        <h2>Ошибка. Что-то пошло не так...</h2>
        <p>{error}</p>
        <Button text='Попробовать ещё раз' onCLick={() => dispatch(getAllProducts())}/>
      </>
    )
  }

  const isSkipCard = (index) => {
    return (currentPage - 1) * cardsPerPage >= index + 1 ||
      index + 1 > (currentPage) * cardsPerPage
  }

  const allProducts = data
    .filter((product, index) => !isSkipCard(index))

  const createdProducts = data
    .filter((product) => (product.published))
    .filter((product, index) => !isSkipCard(index))

  const getWrapperProducts = (arr) => <ProductsList data={arr}/>


  return (
    <div>
      <Tabs data={[
        {
          title: 'Продукты',
          value: getWrapperProducts(allProducts),
          arrLength: data.length,

        },
        {
          title: 'Созданные',
          value: getWrapperProducts(createdProducts),
          // arrLength: data.filter((product) => (product.published)).length,
          arrLength: 7,
        },
      ]}
      />


      {/*<Pagination*/}
      {/*  totalListLength={data.length}*/}
      {/*/>*/}
    </div>
  );
};

export default ProductsWrapper;