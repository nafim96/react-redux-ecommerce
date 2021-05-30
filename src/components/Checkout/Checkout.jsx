import { useSelector } from "react-redux"
import './checkout.css'

const Checkout = () => {

    const user = useSelector(state => state.user.user)
    let product = useSelector(state => state.singleProduct.product)
    const { title, price, image, description } = product
    let vat = price * 10 / 100
    console.log(product)

    return (
        <>
            <section className="checkout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="productPart">
                                <div className="d-flex justify-content-center">
                                    <h5>{title}</h5>
                                    <p className="_price">${price}</p>
                                </div>
                                <div className="text-center">
                                    <img className="w-50" src={image} alt="" />
                                </div>
                                <div>
                                    <p className="pt-5">{description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="paymentPart">
                                <h2>Payment Details</h2>
                                <p>Complete your purchase by providing your payment details</p>
                                <form className="pt-4">
                                    <div class="form-group mb-3">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" name="name" class="form-control" id="name" defaultValue={user.name} required />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label htmlFor="email">Your Email</label>
                                        <input type="text" name="email" class="form-control" id="first" defaultValue={user.email} required />
                                    </div>
                                    <label htmlFor="address">Billing Address</label>
                                    <input type="text" name="address" class="form-control" id="address" placeholder="United States" required />
                                    <div class="input-group">
                                        <input type="number" name="zip" class="form-control" placeholder="ZIP" required />
                                        <input type="text" name="state" class="form-control" placeholder="State" required />
                                    </div>
                                    <div className="price my-4">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2">Subtotal</td>
                                                    <td>${price}</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2">VAT (10%)</td>
                                                    <td>${vat}</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2"><b>Total</b></td>
                                                    <td><b>{price + vat}</b></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="d-grid my-5">
                                        <input class="btn btn-warning" type="submit" value={'Pay $' + (price + vat)} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout
