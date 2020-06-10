import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Spinner } from "reactstrap";
import Header from "./Header"
import Menu from "./Menu"
import IMG from "../color/drawkit-content-man-alt.svg"
import { signout, isAuthenticated } from "../auth";

const Home = () => {
    const {user, token} = isAuthenticated();
    const content = () => {
        return(
            <Fragment>
                  <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid mt-5">
                        <div className="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4">
                            <div className="mr-4 mb-3 mb-sm-0">
                                <h1 className="mb-0">Dashboard</h1>
                                <div className="small"><span className="font-weight-500 text-primary">Friday</span> &middot; September 20, 2020 &middot; 12:16 PM</div>
                            </div>
                            <div className="dropdown">
                                <Link className="btn btn-white btn-sm font-weight-500 line-height-normal p-3 dropdown-toggle" id="dropdownMenuLink" to="#" role="button" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false"><i className="text-primary mr-2" data-feather="calendar"></i>Jan - Feb 2020</Link>
                                <div className="dropdown-menu dropdown-menu-sm-right animated--fade-in" aria-labelledby="dropdownMenuLink">
                                    <Link className="dropdown-item" to="#!">Last 30 days</Link><Link className="dropdown-item" to="#!">Last week</Link><Link className="dropdown-item" to="#!">This year</Link><Link className="dropdown-item" to="#!">Yesterday</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#!">Custom</Link>
                                </div>
                            </div>
                        </div>
                        <div className="alert alert-primary border-0 mb-4 mt-5 px-md-5">
                            <div className="position-relative">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col position-relative">
                                        <h2 className="text-primary">Welcome back, your dashboard is ready!</h2>
                                        <p className="text-gray-700">Great job, your affiliate dashboard is ready to go! You can view sales, generate links, prepare coupons, and download affiliate reports using this dashboard.</p>
                                        <Link className="btn btn-teal" to="#!">Get started<i className="ml-1" data-feather="arrow-right"></i></Link>
                                    </div>
                                    <div className="col d-none d-md-block text-right pt-3"><img className="img-fluid mt-n5" src={IMG} style={{maxWidth: "25rem"}} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-blue h-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="small font-weight-bold text-blue mb-1">School (Id)</div>
                                                <div className="h6">{user.schoolId} </div>
                                                <div className="text-xs font-weight-bold text-success d-inline-flex align-items-center"><i className="mr-1" data-feather="trending-up"></i>12%</div>
                                            </div>
                                            <div className="ml-2"><i className="fas fa-dollar-sign fa-2x text-gray-200"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-purple h-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="small font-weight-bold text-purple mb-1">Average sale price</div>
                                                <div className="h5">$27.00</div>
                                                <div className="text-xs font-weight-bold text-danger d-inline-flex align-items-center"><i className="mr-1" data-feather="trending-down"></i>3%</div>
                                            </div>
                                            <div className="ml-2"><i className="fas fa-tag fa-2x text-gray-200"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-green h-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="small font-weight-bold text-green mb-1">Clicks</div>
                                                <div className="h5">11,291</div>
                                                <div className="text-xs font-weight-bold text-success d-inline-flex align-items-center"><i className="mr-1" data-feather="trending-up"></i>12%</div>
                                            </div>
                                            <div className="ml-2"><i className="fas fa-mouse-pointer fa-2x text-gray-200"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-yellow h-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">
                                                <div className="small font-weight-bold text-yellow mb-1">Conversion rate</div>
                                                <div className="h5">1.23%</div>
                                                <div className="text-xs font-weight-bold text-danger d-inline-flex align-items-center"><i className="mr-1" data-feather="trending-down"></i>1%</div>
                                            </div>
                                            <div className="ml-2"><i className="fas fa-percentage fa-2x text-gray-200"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-xl-3 mb-4">
                               
                               
                                <div className="card bg-secondary border-0">
                                    <div className="card-body">
                                        <h5 className="text-white-50">Budget reporting</h5>
                                        <div className="mb-4"><span className="display-4 text-white">$48k</span><span className="text-white-50"> per year</span></div>
                                        <div className="progress bg-white-25 rounded-pill" style={{height: "0.5rem"}}><div className="progress-bar bg-white w-75 rounded-pill" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-xl-9 mb-4">
                               {/* content goes here  */}
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="footer mt-auto footer-light">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 small">Copyright &copy; Your Website 2020</div>
                            <div className="col-md-6 text-md-right small">
                                <Link to="#!">Privacy Policy</Link>
                                &middot;
                                <Link to="#!">Terms &amp; Conditions</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            </Fragment>
        )
    }



    return(
        <Fragment>
            <Header />
            <div id="layoutSidenav">
                <Menu />
                {content()}
            </div>
        </Fragment>
    )

}



export default Home;
