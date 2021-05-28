import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailProduct, removeDetailProduct } from "../../redux/actions/products_Actions";
import { Col, Container, Row } from "react-bootstrap";
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
        return () => {
            dispatch(removeDetailProduct());
        }
    }, [id])

    console.log(product?.image)

    return (
        <Container>
            {
                product == undefined ? <MySpinner animation="border" variant="primary" /> :
                    <Row className={classes.details}>
                        <Col md={6} sm={12} xs={12}>
                            <img src={product?.image} alt="product" />
                        </Col>
                        <Col md={6} sm={12} xs={12}>
                            <h1>{product?.title}</h1>
                            <p><small><b>Category : </b> {product?.category}</small></p>
                            <p className={classes.price}>$ {product?.price}</p>
                            <p className={classes.discriptio}>{product?.description}</p>
                            <p><button>Place Order</button></p>
                        </Col>
                    </Row>
            }
        </Container>
    )
}

export default DetailProduct
