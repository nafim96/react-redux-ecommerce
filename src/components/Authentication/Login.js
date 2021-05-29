import React from 'react';
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
        <div>
            {/* <Navbar></Navbar> */}
            {/* sign in form */}
            {newUser && <div className="card col-md-3 container">
                <form >
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input required type="email" name="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input required type="password" name="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    <p className="forgot-password text-right">
                        Don't have an account? <p style={{ display: 'inline-block', color: 'blue', textDecoration: 'underline' }} onClick={() => setNewUser(!newUser)}> Create an account</p>
                    </p>
                </form>

                {/* sign in with facebook */}
                <div className="pb-2">
                    <div className=" d-flex align-items-center">
                        <button type="submit" onClick={handleGoogleSignIn} className="btn btn-block" style={{ border: '1px solid black', borderRadius: '25px' }}>
                            <img width="40px" style={{ marginBottom: '3px' }} alt="Facebook sign-in" src="https://logotyp.us/files413/facebook.svg" />
              Continue with Facebook
            </button>
                    </div>
                </div>

                {/* sign in with google */}
                <div>
                    <div className=" d-flex align-items-center">
                        <button type="submit" onClick={handleGoogleSignIn} className="btn btn-block" style={{ border: '1px solid black', borderRadius: '25px' }}>
                            <img width="19px" style={{ marginBottom: '3px', marginRight: '12px' }} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
              Continue with Google
            </button>
                    </div>
                </div>

                {/* <p style={{ color: 'red' }}>{loggedInUser.error}</p> */}
            </div>
            }

            {/* sign up form */}
            {!newUser && <div className="card col-md-3 pb-3 container">
                <form >
                    <h3 className="text-center">Create an account</h3>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" required name="name" className="form-control" placeholder="Name" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" required className="form-control" name="email" placeholder="Enter email" />
                    </div>


                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" required className="form-control" name="password" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" name="confirmPassword" placeholder="Confitm password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Create an account</button>
                    <p className="forgot-password text-right">
                        Already have an account? <span style={{ color: 'blue', textDecoration: 'underline' }} onClick={() => setNewUser(!newUser)}>Login</span>
                    </p>
                    <p className="text-center">..................Or..................</p>
                </form>


                {/* sign in with facebook */}
                <div className="pb-2">
                    <div className=" d-flex align-items-center">
                        <button type="submit" onClick={handleGoogleSignIn} className="btn btn-block" style={{ border: '1px solid black', borderRadius: '25px' }}>
                            <img width="40px" style={{ marginBottom: '3px' }} alt="Google sign-in" src="https://logotyp.us/files413/facebook.svg" />
              Continue with Facebook
            </button>
                    </div>
                </div>



                {/* sign in with google */}
                <div>
                    <div className=" d-flex align-items-center">
                        <button type="submit" onClick={handleGoogleSignIn} className="btn btn-block" style={{ border: '1px solid black', borderRadius: '25px' }}>
                            <img width="19px" style={{ marginBottom: '3px', marginRight: '12px' }} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
              Continue with Google
            </button>
                    </div>
                </div>

            </div>
            }
        </div>
    );
};

export default Login;