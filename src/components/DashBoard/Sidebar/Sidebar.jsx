import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="col-md-3 menu-div bg-success">
            <div className="d-flex justify-content-center">
                <div className=" menu-container">
                    <Link to="/manageProduct"><p id="manageProducts" className="row menu">Manage Services</p></Link>
                    <Link to="/addProduct"><p id="addProducts" className="row menu">Add Product</p></Link>
                    <Link to="/makeAdmin"><p id="editProducts" className="row menu">Make Admin</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;