import React, { useContext } from "react"
import { Form, Formik } from "formik"
import { ShippingContext } from "../../../CartContext"
import { useSelector } from "react-redux"
import { selectTotalAmount, selectProducts, store, emptyCart, setTotalItems} from "../../../Config/store"
import { CartContext } from "../../../CartContext"
import "../../index.css"


const OrderSummary = ({ handleNext }) => {
    const product = useSelector(selectProducts)
    const cartProducts = product.filter((product) => product.added);
    const [cart, setCart] = useContext(CartContext);
    let totalAmount = useSelector(selectTotalAmount);
    const [ShippingState, setShippingState] = useContext(ShippingContext);

    const {
        firstName,
        lastName,
        address,
        city,
        email,
        state,
        country,
        zipCode,
    } = ShippingState;


    return (
        <Formik
            initialValues={{}}
            onSubmit={(values) => {
                setTimeout(() => {
                    setCart([]);
                    store.dispatch(emptyCart(product));
                    store.dispatch(setTotalItems(0));
                    handleNext();
                }, 400);
            }}
        >
            <Form>
                <div className="row">
                    <div className="col">
                        <h3 className="text-center fw-bold">Order Summary</h3>
                        <table className="table table-striped table-bordered mt-4">
                            <tbody>
                                {cartProducts.map((product) => {
                                    let { id, price, imageUrl, title, quantity } = product
                                    return <tr key={id}>
                                        <td className="text-center"><img src={imageUrl} style={{ width: 50 }} alt="product" /></td>
                                        <td className="text-center">{title}</td>
                                        <td className="text-center">{price}</td>
                                        <td className="text-center">{quantity}</td>

                                    </tr>
                                })}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-center fs-4 fw-bold" colSpan="2">Total Amount : {totalAmount}</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>


                </div>
                <div className="container">
                    <div className="row">

                        <div className="col p-2 border">
                            <h5 className="text-center fw-bold">Shipping Details</h5>

                            <p><b>Name</b> : {firstName} {lastName}</p>
                            <p><b>Email</b> : {email}</p>
                            <p><b>Address</b> : {address}</p>
                            <p><b>City</b> : {city}</p>
                            <p><b>Country</b> : {country}</p>
                            <p><b>State</b> : {state}</p>
                            <p><b>Postal Code</b> : {zipCode}</p>
                        </div>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="form-btn btn  mt-3">Place Order</button>

                </div>

            </Form>

        </Formik>
    )
}

export default OrderSummary