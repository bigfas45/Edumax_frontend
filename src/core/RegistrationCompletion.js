import React, {Fragment, useState, useEffect} from "react";
import {Link, withRouter, Redirect} from "react-router-dom";
import IMG from "../color/overview.svg"


const RegistrationCompletion = () => {



    return(
        <Fragment>
 <div class="error-page">
        <div id="layoutError">
            <div id="layoutError_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="text-center mt-4">
                                    <img class="mb-4 img-error" src={IMG} />
                                    <p class="lead">An email has been sent to your email for your attention, kindly verify your email to proceed</p>
                                    <Link class="text-arrow-icon" to="/signin"><i class="ml-0 mr-1" data-feather="arrow-left"></i>Return to Signin</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutError_footer">
                <footer class="footer mt-auto footer-light">
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

export default RegistrationCompletion;
