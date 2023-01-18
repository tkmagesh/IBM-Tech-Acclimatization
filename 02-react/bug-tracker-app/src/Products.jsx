import React from 'react'


function NewProduct({onAdded}) {
    const [newProductName, setNewProductName] = React.useState('')
    const onTxtProductNameChange = (evt) => {
        setNewProductName(evt.target.value)
    }
    const onBtnAddNewClick = () => {
        // setProductNames([...productNames, newProductName])
        onAdded(newProductName)
    }
    return (
        <div>
            <label htmlFor="">Product Name :</label>
            <input type="text" onChange={onTxtProductNameChange} />
            <button onClick={onBtnAddNewClick}>Add New</button>
        </div>
    )
}

function ProductsList({data}){
    const productItems = data.map((productName, idx) => (<li key={idx}>{productName}</li>))
    return (
        <ul>
            {productItems}
        </ul>
    )
}

function Products(){
    const [productNames, setProductNames] = React.useState([ 'Pen', 'Pencil', 'Marker' ])
    const onNewProductAdded = (newProductName) => {
        setProductNames([...productNames, newProductName])
    }
    return (
        <div>
            <h1>Products</h1>
            <hr />
            <NewProduct onAdded={onNewProductAdded}/>
            <ProductsList data={productNames}/>
            {/*  */}
        </div>
    )
}

export default Products