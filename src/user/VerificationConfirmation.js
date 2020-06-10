import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { verified } from "../auth";
import IMG from "../color/overview.svg"



const Verification = ({match}) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    const init = (userId) => {
        verified(userId).then(data => {
            if (data.error) {
               setError(data.error)
            }else{
                setData(data)
               
      
            }
        });
      };
        
      useEffect(() => {
        init(match.params.userId);
      },[]);


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
                                    <h1>Your account has been verified!</h1>
                                    <p class="lead"><strong>Thank you for verifying your account and beginning the application process for Edumax</strong></p>
          <p>From now on, you will be able to access your application by logging into the  Platform with your email address and password  .</p>
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

export default Verification