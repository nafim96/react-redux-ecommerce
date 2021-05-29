import { useSelector } from "react-redux"
import './checkout.css'

const Checkout = () => {

    const user = useSelector(state => state.user.user)
    let product = useSelector(state => state.singleProduct.product)
    const {title, price} = product
    console.log(product)

    return (
        <>
            <section className="checkout">
                <div className="container">
                    <h1>Hi {user.name} !</h1>
                    <p>You've selected - "{title}"</p>
                </div>
            </section>
        </>
    )
}

export default Checkout
