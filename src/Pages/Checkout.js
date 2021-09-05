import Footer from "../Components/Footer"
import Header from "../Components/Header"
import StepperComponent from "../Components/Stepper/Stepper"
import "./index.css"

const Checkout = () => {
    return (
        <>
            <Header />

            <div className="row">

                <div className="container-fluid col cart-home-image ">
                    <h2 className="text-white">Checkout</h2>
                </div>
              
            </div>
            <div className="container">
                    <StepperComponent />

                </div>
            <Footer />

        </>
    )
}

export default Checkout