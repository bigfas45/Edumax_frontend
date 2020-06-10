import React, {Fragment} from "react";
import {Link, withRouter} from "react-router-dom";
import IMG from "../color/drawkit-content-man-color.svg"


const Header = () => {
  

    return (
        <Fragment>
              <header class="page-header page-header-dark bg-secondary">
                        <div class="page-header-content">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-xl-8 col-lg-10 text-center">
                                        <h1 class="page-header-title">Build your next project faster</h1>
                                        <p class="page-header-text mb-5">Welcome to SB UI Kit Pro, a toolkit for building beautiful web interfaces, created by the developmet team at Start Bootstrap</p>
                                        <form class="page-header-signup mb-2 mb-md-0">
                                            <div class="form-row justify-content-center">
                                                <div class="col-lg-6 col-md-8">
                                                    <div class="form-group mr-0 mr-lg-2"><label class="sr-only" for="inputEmail">Enter your email...</label><input class="form-control form-control-solid rounded-pill" id="inputEmail" type="email" placeholder="Enter your email..." /></div>
                                                </div>
                                                <div class="col-lg-3 col-md-4"><button class="btn btn-teal btn-block btn-marketing rounded-pill" type="submit">Sign Up</button></div>
                                            </div>
                                        </form>
                                        <p class="page-header-text small mb-0">By signing up, you agree to our <a href="javascript:void(0);">terms of service</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="svg-border-waves text-white">
                            <svg class="wave" style={{pointerEvents: "none"}} fill="currentColor" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 75">
                                {/* <defs>
                                    <style>
                                        .a {
                                            fill= none
                                        }
                                        .b {
                                            clipPath= url('#a')
                                        }
                                        .d {
                                            opacity= 0.5,
                                            isolation= isolate
                                        }
                                    </style>
                                    <clipPath id="a"><rect class="a" width="1920" height="75" /></clipPath>
                                </defs> */}
                                <title>wave</title>
                                <g class="b"><path class="c" d="M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48" /></g>
                                <g class="b"><path class="d" d="M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10" /></g>
                                <g class="b"><path class="d" d="M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24" /></g>
                                <g class="b"><path class="d" d="M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150" /></g>
                            </svg>
                        </div>
                    </header>




            
        </Fragment>
    );
};

export default withRouter(Header);
