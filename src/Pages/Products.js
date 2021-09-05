import { useSelector} from 'react-redux'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { store,add , selectProducts ,setTotalItems } from '../Config/store'
import "./index.css"

const ProductItems = () => {
    const products = useSelector(selectProducts)
    //Set total items
    const cartProduct = products.filter((v)=>v.added)
    store.dispatch(setTotalItems(cartProduct.length))
    return(
        <>
        <Header/>
        <div className="row">
                <div className="col  cart-home-image">
                    <h3 className="text-center text-white">Our Products </h3>
                </div>
            </div>
        <div className="container mt-3">
           
            <div className="row mt-1  row-cols-1 row-cols-md-3 g-4">
                {products.map((v,i) => {
                    return <div className="col" key={i}>
                        <div className="card">
                        <img src={v.imageUrl} className="card-img-top  border-bottom p-5" alt="Shoes" />
                        <div className="card-body  d-grid">
                            <h5 className="card-title">{v.title}</h5>
                            <p>Price {v.price}</p>
                            <button onClick={() => store.dispatch(add(v))} className="cart-btn btn">Add to cart</button>
                        </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ProductItems