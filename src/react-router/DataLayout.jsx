import {NavLink, Outlet, useLocation} from "react-router";
import "./data.css"
export default function DataLayout() {
    const location = useLocation();
    return (
        <div>
            <div>Header</div>
            <div>
                <ul>
                    <li><NavLink to="/data/products">Products</NavLink></li>
                    <li><NavLink to="/data/customers">Customer</NavLink></li>
                    <li><NavLink to="/data/sellers">Seller</NavLink></li>
                    <li><NavLink to={{
                        pathname: "/data/products",
                        search: "?category=food",
                        hash: "#top"
                    }}>Products</NavLink></li>
                </ul>
            </div>
            <div><Outlet/></div>
            <div>
                <div>Footer</div>
                <div>
                    <p>Location  : {location.pathname}{location.search}{location.hash}</p>
                </div>
            </div>
        </div>
    )
}