
import { Link } from 'react-router-dom'
import classes from './intro.module.css'

const Intro = () => {
    return (
        <div className="container text-center">
            <div className={classes.intro}>
                <h1>Hi, Welcome to Redux Hub</h1>
                <p>The ultimate collcetions of everyday need besides your home. So what are you waiting for? <Link to="/login">Shop Now</Link></p>
            </div>
        </div>
    )
}

export default Intro
