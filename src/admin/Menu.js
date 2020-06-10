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
                            <div className="sidenav-menu-heading">Interface</div>
                            <Link className="nav-link collapsed" to="/admin/create/class" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="nav-link-icon">
                                    <i data-feather="layout"></i>
                                </div>
                                Class
                                <div className="sidenav-collapse-arrow">
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </Link>
                            <div className="collapse" id="collapseLayouts" data-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavLayout">
                                    <Link className="nav-link" to="/admin/create/class">Create Class</Link>
                                    
                                   
                                </nav>
                            </div>

                          

                           
                            <a class="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#collapseDashboards2" aria-expanded="false" aria-controls="collapseDashboards2"
                                ><div class="nav-link-icon"><i data-feather="activity"></i></div>
                                Users
                                <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div></a>
                            <div class="collapse" id="collapseDashboards2" data-parent="#accordionSidenav">
                                <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                                <Link class="nav-link" to="/admin/create/user">Create User<span class="badge badge-primary ml-2">user</span></Link>

                                    <Link class="nav-link" to="/admin/students">Students<span class="badge badge-primary ml-2">user</span></Link>
                                    <Link class="nav-link" to="/admin/teachers">Teachers<span class="badge badge-primary ml-2">user</span></Link>
                                    <Link class="nav-link" to="/admin/users">Admin<span class="badge badge-primary ml-2">user</span></Link>
                                    <a class="nav-link" href={`${API}/user/file/5ecbf6efcf47cf4650e08098`}>Template<span class="badge badge-primary ml-2">download</span></a>
                                    <Link class="nav-link" to="/admin/upload">Upload<span class="badge badge-primary ml-2">user</span></Link>

                                </nav>
                            </div>

                            <Link className="nav-link collapsed" to="/admin/create/subject" data-toggle="collapse" data-target="#collapseLayoutsSubject" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="nav-link-icon">
                                    <i data-feather="layout"></i>
                                </div>
                                Subject
                                <div className="sidenav-collapse-arrow">
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </Link>
                            <div className="collapse" id="collapseLayoutsSubject" data-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavLayout">
                                    <Link className="nav-link" to="/admin/create/subject">Create Subject</Link>
                                    
                                   
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

