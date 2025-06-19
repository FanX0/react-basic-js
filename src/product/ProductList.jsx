import { useEffect, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    function handleClick() {
        setLoad(true);
    }

    useEffect(() => {
        async function fetchProducts() {
            console.log("Load products");
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Failed to load products:", error);
            }
        }

        if (load) {
            fetchProducts();
        }
    }, [load]);

    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Products</button>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </>
    );
}
