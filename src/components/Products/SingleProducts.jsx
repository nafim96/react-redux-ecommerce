import { Card } from "react-bootstrap"
import MySpinner from '../Spinner'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import classes from './products.module.css'

const SingleProducts = () => {

    const products = useSelector(state => state.totalProducts.products)
    const productsToMap = products?.slice(0, 18)
    return (
        <>
            {
                products.length === 0 && <MySpinner />
            }
            {
                productsToMap.map(product => {
                    const { id, title, image, price, category } = product
                    return (
                        <div className="col-md-4 col-sm-6">
                            <div className={classes.card}>
                                <Link to={`/product/${id}`}>
                                    <div className={classes.cardImg}>
                                        <Card.Img variant="top" src={image} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: '600' }}>{title}</h4>
                                        <p>
                                            <p style={{ fontWeight: '600' }}>$ {price}</p> <hr />
                                            <p><small>{category}</small></p>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default SingleProducts
