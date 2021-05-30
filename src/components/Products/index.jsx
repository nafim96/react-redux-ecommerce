import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { setProducts } from "../../redux/actions/products_Actions";
import SingleProducts from "./SingleProducts";

const Products = () => {

    const dispatch = useDispatch()
    const loadProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log(err);
            });
        dispatch(setProducts(response?.data));
    };

    useEffect(() => {
        loadProducts();
    }, []);
    return (
        <section style={{paddingBottom: '50px'}}>
            <div className="container-fluid">
                <div className="row">
                    <SingleProducts />
                </div>
            </div>
        </section>
    )
}

export default Products
