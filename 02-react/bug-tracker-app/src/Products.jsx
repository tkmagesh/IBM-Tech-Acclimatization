import React from 'react'
import axios from 'axios'
import NewProduct from './NewProduct'
import ProductsList from './ProductsList'

function Products(){
    const [productNames, setProductNames] = React.useState([ ])
    const onNewProductAdded = (newProductName) => {
        setProductNames([...productNames, newProductName])
    }
    const onLoadProductsClick = () => {
        axios.get('http://localhost:3030/products')
            .then(response => response.data)
            .then(products => setProductNames(products))

    }
    return (
        <div>
            <h1>Products</h1>
            <hr />
            <button onClick={onLoadProductsClick}>Load Products</button>
            <NewProduct onAdded={onNewProductAdded}/>
            <ProductsList data={productNames}/>
            {/*  */}
        </div>
    )
}

export default Products