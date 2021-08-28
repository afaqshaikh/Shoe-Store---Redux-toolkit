import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Cart from '../Pages/Cart'
import ProductItems from '../Pages/Products'

const Routes = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />;
                <Route path="/about" component={About} />;
                <Route exact path="/cart" component={Cart} />;
                <Route exact path="/products" component={ProductItems} />;
         
            </Switch>
        </Router>
        </>
    )
}

export default Routes