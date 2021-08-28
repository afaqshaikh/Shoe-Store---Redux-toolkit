import './index.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../Config/store';

const Header = () => {
  // Total
  let totalItems = useSelector(selectTotalItems);
  return (
    <div className="row sticky-top">

      <nav id="navbar-example2" className="navbar navbar-light  px-3">
        <h3 className="navbar-brand text-white" >Shoe Store</h3>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">About</Link>

          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/products">Products</Link>

          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/cart">
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              {` ${totalItems} `} Item
            </Link>

          </li>

        </ul>
      </nav>

    </div>
  )
}

export default Header