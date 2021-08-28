import Shoes from './../shoes.json'
import './index.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
const Home = () => {

    return (
        <>
            <Header />
                <div className="row">
                    <div className="col home-image ">
                    <h4 className="text-white">Nike Shoe Store With Redux toolkit</h4>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row mt-4  row-cols-1 row-cols-md-3 g-4">
                        {Object.keys(Shoes).map((keyName) => {
                            const shoe = Shoes[keyName];
                            return (

                                <div className="col" key={keyName}>
                                    <div className="card">
                                        <img src={shoe.img} className="card-img-top image" alt="Shoes" />
                                        <div className="card-body">
                                            <h5 className="card-title">{shoe.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>

            <Footer />
        </>
    )
}

export default Home