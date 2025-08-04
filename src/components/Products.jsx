import Product from "./Product";
import './Products.css';

function Products() {
    return (
        <div className="products-wrapper">
            <Product name="Product 1" description="Description for Product 1" />
            <Product name="Product 2" description="Description for Product 2" />
            <Product name="Product 3" description="Description for Product 3" />
        </div>
    );
}

export default Products;