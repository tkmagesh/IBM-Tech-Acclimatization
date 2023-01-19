import React from "react"
import axios from "axios"
function NewProduct({ onAdded }) {
    const [newProductName, setNewProductName] = React.useState('')
    const [newProductCost, setNewProductCost] = React.useState(0)

    const onTxtProductNameChange = (evt) => {
        setNewProductName(evt.target.value)
    }
    const onTxtCostChange = (evt) => {
        setNewProductCost(Number(evt.target.value))
    }
    const onBtnAddNewClick = () => {
        const newProductData = {
            name : newProductName,
            // cost : newProductCost
        }
        axios.post('http://localhost:3030/products', newProductData)
            .then(response => response.data)
            .then(newProduct => onAdded(newProduct))
    }
    return (
        <div>
            <div>
            <label htmlFor="">Product Name :</label>
            <input type="text" onChange={onTxtProductNameChange} />
            </div>
            <div>
                <label htmlFor="">Cost</label>
                <input type="number" onChange={onTxtCostChange} />
            </div>
            <button onClick={onBtnAddNewClick}>Add New</button>
        </div>
    )
}

export default NewProduct