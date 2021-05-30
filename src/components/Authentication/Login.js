import './login.css'
import { Facebook, Google } from 'react-bootstrap-icons'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

import { useHistory, useLocation } from 'react-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/products_Actions';

const Login = () => {

    const [newUser, setNewUser] = useState(false);
    const dispatch = useDispatch()
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var { displayName, email, photoURL } = result.user;
                const userData = { name: displayName, email: email, photoURL: photoURL };
                dispatch(setUser(userData))
                history.replace(from);
            })
            .catch(err => err.message);
    }

    return (
        <div className="container" style={{ height: newUser ? '100vh' : '100%' }}>
            <section className="pb-5">
                {newUser && <div className="p-5 bg-white myform">
                    <form >
                        <h3>Sign In</h3>

                        <div className="form-group mb-3">
                            <label>Email address</label>
                            <input required type="email" name="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group mb-3">
                            <label>Password</label>
                            <input required type="password" name="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group mb-3">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                        <p className="text-center py-3">
                            Don't have an account? <span style={{ color: 'royalblue', cursor: 'pointer' }} onClick={() => setNewUser(!newUser)}> Create an account</span>
                        </p>
                    </form>

                    <div className="pb-2">
                        <div className=" d-flex justify-content-center align-items-center">
                            <button type="submit" onClick={handleGoogleSignIn} className="btn btn-block" style={{ border: '1px solid black', borderRadius: '25px' }}>
                                <Facebook color="royalblue" className="pe-2" size={30} />
              Continue with Facebook
            </button>
                        </div>
                    </div>

                    <div>
                        <div className=" d-flex justify-content-center align-items-center">
                            <button type="submit" onClick={handleGoogleSignIn} className="btn btn-block" style={{ border: '1px solid black', borderRadius: '25px' }}>
                                <Google color="orangered" className="pe-2" size={30} />
              Continue with Google
            </button>
                        </div>
                    </div>

                </div>
                }

                {!newUser && <div className="p-5 bg-white myform">
                    <form >
                        <h3 className="text-center">Create an account</h3>

                        <div className="form-group mb-3">
                            <label>Name</label>
                            <input type="text" required name="name" className="form-control" placeholder="Name" />
                        </div>

                        <div className="form-group mb-3">
                            <label>Email address</label>
                            <input type="email" required className="form-control" name="email" placeholder="Enter email" />
                        </div>


                        <div className="form-group mb-3">
                            <label>Password</label>
                            <input type="password" required className="form-control" name="password" placeholder="Enter password" />
                        </div>

                        <div className="form-group mb-3">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" name="confirmPassword" placeholder="Confitm password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Create an account</button>
                        <p className="text-center py-3">
                            Already have an account? <span style={{ color: 'royalblue', cursor: 'pointer' }} onClick={() => setNewUser(!newUser)}>Login</span>
                        </p>
                        <p className="text-center">..................Or..................</p>
                    </form>


                    {/* sign in with facebook */}
                    <div className="pb-3">
                        <div className=" d-flex justify-content-center align-items-center">
                            <button type="submit" onClick={handleGoogleSignIn} className="btn btn-block" style={{ border: '1px solid black', borderRadius: '25px' }}>
                                <Facebook color="royalblue" className="pe-2" size={30} />
              Continue with Facebook
            </button>
                        </div>
                    </div>
                    <div>
                        <div className=" d-flex justify-content-center align-items-center">
                            <button type="submit" onClick={handleGoogleSignIn} className="btn btn-block" style={{ border: '1px solid black', borderRadius: '25px' }}>
                                <Google color="orangered" className="pe-2" size={30} />
              Continue with Google
            </button>
                        </div>
                    </div>

                </div>
                }
            </section>
        </div>
    );
};

export default Login;