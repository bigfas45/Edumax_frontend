
import React, {Fragment} from "react";
import {Link, withRouter} from "react-router-dom";


const Footer = () => {



    return(
<Fragment>
<div id="layoutDefault_footer">
                <footer className="footer pt-10 pb-5 mt-auto bg-dark footer-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="footer-brand">SB UI Kit Pro</div>
                                <div className="mb-3">Build better websites</div>
                                <div className="icon-list-social mb-5">
                                    <Link className="icon-list-social-link" to="t/"><i className="fab fa-instagram"></i></Link><Link className="icon-list-social-link" to="t/"><i className="fab fa-facebook"></i></Link><Link className="icon-list-social-link" to="t/"><i className="fab fa-github"></i></Link><Link className="icon-list-social-link" to="t/"><i className="fab fa-twitter"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                                        <div className="text-uppercase-expanded text-xs mb-4">Product</div>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2"><Link to="t/">Landing</Link></li>
                                            <li className="mb-2"><Link to="t/">Pages</Link></li>
                                            <li className="mb-2"><Link to="t/">Sections</Link></li>
                                            <li className="mb-2"><Link to="t/">Documentation</Link></li>
                                            <li><Link to="t/">Changelog</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                                        <div className="text-uppercase-expanded text-xs mb-4">Technical</div>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2"><Link to="t/">Documentation</Link></li>
                                            <li className="mb-2"><Link to="t/">Changelog</Link></li>
                                            <li className="mb-2"><Link to="t/">Theme Customizer</Link></li>
                                            <li><Link to="t/">UI Kit</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                                        <div className="text-uppercase-expanded text-xs mb-4">Includes</div>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2"><Link to="t/">Utilities</Link></li>
                                            <li className="mb-2"><Link to="t/">Components</Link></li>
                                            <li className="mb-2"><Link to="t/">Layouts</Link></li>
                                            <li className="mb-2"><Link to="t/">Code Samples</Link></li>
                                            <li className="mb-2"><Link to="t/">Products</Link></li>
                                            <li className="mb-2"><Link to="t/">Affiliates</Link></li>
                                            <li><Link to="t/">Updates</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="text-uppercase-expanded text-xs mb-4">Legal</div>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2"><Link to="t/">Privacy Policy</Link></li>
                                            <li className="mb-2"><Link to="t/">Terms and Conditions</Link></li>
                                            <li><Link to="t/">License</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="row align-items-center">
                            <div className="col-md-6 small">Copyright &#xA9; Your Website 2020</div>
                            <div className="col-md-6 text-md-right small">
                                <Link to="t/">Privacy Policy</Link>
                                &#xB7;
                                <Link to="t/">Terms &amp; Conditions</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
</Fragment>
    )

}

export default Footer;

  










