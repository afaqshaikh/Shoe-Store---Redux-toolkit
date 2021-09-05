import { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectProducts, remove, store, setTotalItems, setTotalAmount, selectTotalAmount, emptyCart } from '../Config/store'
import "./index.css"


const Cart = () => {
    let products = useSelector(selectProducts)
    let totalAmount = useSelector(selectTotalAmount)

    //Set total items
    const cartProduct = products.filter((v) => v.added)
    store.dispatch(setTotalItems(cartProduct.length))

    let sum = cartProduct.map((product) => {
        let { price, quantity } = product
        let total = price * quantity
        return total
    })
        .reduce((acc, curr) => {
            return acc + curr;
        }, 0);

    useEffect(() => {
        store.dispatch(setTotalAmount(Number(sum).toFixed(2)));
    }, [sum]);

    return (
        <>
            <Header />
            <div className="row">
                <div className="col cart-home-image ">
                    <h2 className="text-white">Cart</h2>
                </div>
            </div>
            <div className="container  mt-5">
               
                <table className="table table-striped table-bordered mt-4">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartProduct.length <= 0 && (
                            <tr>
                                <td className="text-center fs-3 fw-bold" colSpan="6">
                                    Your cart is empty
                                </td>
                            </tr>
                        )}
                        {products.filter((product) => product.added).map((product) => {
                            let { id, price, imageUrl, title, quantity } = product
                            return <tr key={id}>
                                <th className="text-center" scope="row">{id}</th>
                                <td className="text-center"><img src={imageUrl} style={{ width: 50 }} alt="product" /></td>
                                <td className="text-center">{title}</td>
                                <td className="text-center">{price}</td>
                                <td className="text-center">{quantity}</td>
                                <td className="text-center">
                                    <button className="btn" onClick={() => store.dispatch(remove({ id: id }))}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        })}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-center fs-4 fw-bold" colSpan="2">Total Amount : {totalAmount}</td>
                        </tr>
                    </tbody>
                </table>
                {cartProduct.length > 0 &&(
                    <div className="row">
                        <div className="col d-grid gap-2 d-md-flex  justify-content-md-end">
                            <button className="btn btn-danger btn-lg" onClick={() => store.dispatch(emptyCart(products))}>Empty Cart</button>
                            <Link className="btn btn-warning btn-lg" to="/checkout">Checkout</Link>
                        </div>

                    </div>
                )}

            </div>
            <Footer />
        </>
    )
}

export default Cart