import React, {Fragment} from "react";
import {Link, withRouter} from "react-router-dom";
import $ from "jquery";
// import { signout, isAuthenticated } from "../auth";
import {API} from '../config';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return {color: "#f0232a"};
    } else {
        return {color: "#001022"};
    }
};

const Menu = ({history}) => {
    return (
        <Fragment>
            <div id="layoutSidenav_nav">
                <nav className="sidenav shadow-right sidenav-light">
                    <div className="sidenav-menu">
                        <div className="nav accordion" id="accordionSidenav">
                            <div className="sidenav-menu-heading">Core</div>
                            <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
                                <div className="nav-link-icon">
                                    <i data-feather="activity"></i>
                                </div>
                                Dashboards
                                <div className="sidenav-collapse-arrow">
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </Link>
                            <div className="collapse" id="collapseDashboards" data-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                                    <Link className="nav-link" to="/admin/dashboard">Default</Link>
                                </nav>
                            </div>
                          
                          

                           
                          

                         
                           
                          
                         
                            
                        </div>
                    </div>
                    <div className="sidenav-footer">
                        <div className="sidenav-footer-content">
                            <div className="sidenav-footer-subtitle">Logged in as:</div>
                            <div className="sidenav-footer-title">Valerie Luna</div>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    );
};

export default withRouter(Menu);

