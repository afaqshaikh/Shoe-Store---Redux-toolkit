import { CartContext } from "../CartContext";
import { useContext, useEffect } from "react";

const PlaceOrder = () => {
    const [cart, setCart] = useContext(CartContext);
    useEffect(() => {
        setCart([]);
    }, []);
    return (
        <div className="row">
            <div className="col">
                <h2 className="text-success text-center">Your Order has been received</h2>
                <br />
                <p className="text-center">
                    Your order number is <strong>#2001539</strong>. We have emailed your
                    order confirmation, and will send you an update when your order has
                    shipped.
                </p>

                <br />
                <h2 className="text-danger text-center">Don't worry it's just a template !</h2>
                <br />
            </div>

        </div>
    )
}

export default PlaceOrder