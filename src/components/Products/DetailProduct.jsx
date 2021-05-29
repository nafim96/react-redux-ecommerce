import React, { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailProduct, removeDetailProduct } from "../../redux/actions/products_Actions";
import classes from './products.module.css'
import MySpinner from "../Spinner";

const DetailProduct = () => {

    const { id } = useParams()
    let product = useSelector(state => state.singleProduct.product)
    // let { image, title, price, description } = product
    const dispatch = useDispatch()

    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log(err);
            });
        dispatch(detailProduct(response.data));
    };

    useEffect(() => {
        if (id && id !== "") {
            fetchProductDetail(id)
        }
        // return () => {
        //     dispatch(removeDetailProduct());
        // }
    }, [id])

    console.log(product?.image)

    return (
        <div className="container">
            <div className={classes.details}>
                {
                    product === undefined ? <MySpinner /> :
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <img src={product?.image} alt="product" />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <h1>{product?.title}</h1>
                                <p><small><b>Category : </b> {product?.category}</small></p>
                                <p className={classes.price}>$ {product?.price}</p>
                                <p className={classes.discriptio}>{product?.description}</p>
                                <Link to="/checkout"><button>Place Order</button></Link>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default DetailProduct
