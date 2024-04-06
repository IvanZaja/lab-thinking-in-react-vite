import ProductsTable from "../products-table/ProductsTable"
import SearchBar from "../search-bar/SearchBar"
import { useState } from "react";
import jsonData from "./../../data.json";

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);

    return (
        <div className="container">
            <SearchBar />
            <ProductsTable products={ products }/>
        </div>
    )
}

export default ProductsPage