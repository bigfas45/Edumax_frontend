import React, {Fragment, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {passwordReset} from '../auth';


const ForgetPassword = () => {

    const [values, setValues] = useState({email: "", error: "", success: false});
    const {email, error, success} = values;

    const handleChnage = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        });
    };


    const clickSubmit = event => {
        event.preventDefault();

        setValues({
            ...values,
            error: false
        });
        passwordReset(email).then(data => {
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error,
                    success: false,
                    pop: false
                });
            } else {
                setValues({
                    ...values,
                    email: "",
                    success: true
                });
            }
        });
    };

    const showError = () => {
        return (

            <div class="alert alert-danger" role="alert"
                style={
                    {
                        display: error ? "" : "none"
                    }
            }>
                {error} </div>


        );
    };

    const showSuccess = () => {
        return (
            <Fragment>
                <div style={
                        {
                            display: success ? "" : "none"
                        }
                    }
                    class="alert alert-success alert-solid"
                    role="alert">Password reset link as been sent to your email</div>
            </Fragment>
        );
    };


    const forgetPasswordForm = () => {
        return (
            <Fragment>
                <div class="bg-primary">
                    <div id="layoutAuthentication">
                        <div id="layoutAuthentication_content">
                            <main>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-5">
                                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                            {
                                                    showSuccess()
                                                }
                                                    {
                                                    showError()
                                                }
                                                <div class="card-header justify-content-center">
                                                  
                                                    <h3 class="font-weight-light my-4">Password Recovery</h3>
                                                </div>
                                                <div class="card-body">
                                                    <div class="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                                                    <form>
                                                        <div class="form-group">
                                                            <label class="small mb-1" for="inputEmailAddress">Email</label><input onChange={
                                                                    handleChnage("email")
                                                                }
                                                                value={email}
                                                                class="form-control py-4"
                                                                id="inputEmailAddress"
                                                                type="email"
                                                                aria-describedby="emailHelp"
                                                                placeholder="Enter email address"/></div>
                                                        <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                            <Link class="small" to="/signin">Return to login</Link>
                                                            <button onClick={clickSubmit}
                                                                class="btn btn-primary">Reset Password</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="card-footer text-center">
                                                    <div class="small">
                                                        <a href="register-basic.html">Need an account? Sign up!</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                        <div id="layoutAuthentication_footer">
                            <footer class="footer mt-auto footer-dark">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-6 small">Copyright &copy; Your Website 2020</div>
                                        <div class="col-md-6 text-md-right small">
                                            <a href="#!">Privacy Policy</a>
                                            &middot;
                                            <a href="#!">Terms &amp; Conditions</a>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment> {
            forgetPasswordForm()
        } </Fragment>
    )

}

export default ForgetPassword

