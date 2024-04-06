
function ProductRow({ product }) {
    return (
        <tr>
            <td colSpan="2">{product.name}</td>
            <td colSpan="2">{product.price}</td>
        </tr>
    )
}

export default ProductRow;