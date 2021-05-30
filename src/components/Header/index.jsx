import classes from './header.module.css'
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className={`container ${classes.navbar}`}>
            <Navbar sticky="top" collapseOnSelect expand="lg" variant="light">
                <Navbar.Brand style={{fontSize: '35px'}}><Link to="/">Redux Hub</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={`ms-auto ${classes.navLink}`}>
                        <Nav.Link href="/">Products</Nav.Link>
                        <Nav.Link href="/">Features</Nav.Link>
                        <Nav.Link href="/">Pricing</Nav.Link>
                        <Nav.Link href=""><Link to="/login">Login</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation
