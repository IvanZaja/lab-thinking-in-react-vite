import ProductRow from "../product-row/ProductRow";


function ProductsTable({products}) {
  return (
    <div>
        <table className="table table-striped-columns table-hover">
            <thead>
                <tr>
                    <th scope="col" colSpan="2">Name</th>
                    <th scope="col" colSpan="2">Price</th>
                </tr>
            </thead>
            <tbody>
                
                {products.map((product) => {
                    return (
                        <ProductRow key={product.id} product={product}/>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductsTable;