function ProductsList({ data }) {
    const productItems = data.map((product, idx) => (
        <li key={product.id}>{product.name} - [${product.cost}]</li>))
    return (
        <ul>
            {productItems}
        </ul>
    )
}

export default ProductsList