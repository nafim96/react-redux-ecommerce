import axios from "axios";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../../redux/actions/products_Actions";
import SingleProducts from "./SingleProducts";

const Products = () => {

    const products = useSelector(state => state.totalProducts.products)
    const dispatch = useDispatch()
    const loadProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log(err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        loadProducts();
    }, []);
    return (
        <div style={{ marginTop: '50px' }}>
            <div className="container">
                <div className="row">
                    <SingleProducts />
                </div>
            </div>
        </div>
    )
}

export default Products
