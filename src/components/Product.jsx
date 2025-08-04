import './Products.css';

function Product({ name, description}) {
    return (
        <div className="product">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Product;