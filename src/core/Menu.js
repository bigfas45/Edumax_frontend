import React, {Fragment, useState, useEffect} from "react";
import {Link, withRouter} from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import {getSchoolInfo} from "./Apicore";

const isActive = (history, path) => {

    

    if (history.location.pathname === path) {
        return {color: "#ffffff"};
    } else {
        return {color: "#001022"};
    }
};




const Menu = ({history}) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false)
    let schId = isAuthenticated() ? isAuthenticated().user.schoolId : ''

    const init = () => {
        getSchoolInfo(schId).then(data => {
            if (data.error) {
               setError(data.error)
            } else {
               setData(data)
            }
        });
    };

    useEffect(() => {
        init();
        
        }, []);


    return (
        <Fragment>
                      <nav className="navbar navbar-marketing navbar-expand-lg bg-white navbar-light">
                        <div className="container">
                            <Link className="navbar-brand text-dark" to="index.html">SB UI Kit Pro</Link><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i data-feather="menu"></i></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mr-lg-5">
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/')} to="/">Home
                                    </Link>
                                </li>                                   
                             <li className="nav-item dropdown dropdown-xl no-caret">
                                        <Link className="nav-link dropdown-toggle" id="navbarDropdownDemos" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Landings<i className="fas fa-chevron-right dropdown-arrow"></i></Link>
                                        <div className="dropdown-menu dropdown-menu-right animated--fade-in-up mr-lg-n15" aria-labelledby="navbarDropdownDemos">
                                            <div className="row no-gutters">
                                                <div className="col-lg-5 p-lg-3 bg-img-cover overlay overlay-primary overlay-70 d-none d-lg-block" style={{backgroundImage: `url("https://source.unsplash.com/mqO0Rf-PUMs/500x350")`}}>
                                                    <div className="d-flex h-100 w-100 align-items-center justify-content-center">
                                                        <div className="text-white text-center z-1">
                                                            <div className="mb-3">Multipurpose landing pages for a variety of projects.</div>
                                                            <Link className="btn btn-white btn-sm text-primary rounded-pill" to="index.html">View All</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 p-lg-5">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <h6 className="dropdown-header text-primary">Applications</h6>
                                                            <Link className="dropdown-item" to="landing-app-mobile.html">Mobile App</Link><Link className="dropdown-item" to="landing-app-desktop.html">Desktop App</Link>
                                                            <div className="dropdown-divider border-0"></div>
                                                            <h6 className="dropdown-header text-primary">Business</h6>
                                                            <Link className="dropdown-item" to="landing-multipurpose.html">Multipurpose</Link><Link className="dropdown-item" to="landing-agency.html">Agency</Link><Link className="dropdown-item" to="landing-press.html">Press</Link><Link className="dropdown-item" to="landing-directory.html">Directory</Link><Link className="dropdown-item" to="landing-rental.html">Rental</Link><Link className="dropdown-item" to="landing-real-estate.html">Real Estate</Link><Link className="dropdown-item" to="landing-classNameifieds.html">classNameifieds</Link>
                                                            <div className="dropdown-divider border-0"></div>
                                                            <h6 className="dropdown-header text-primary">Lead Generation</h6>
                                                            <Link className="dropdown-item" to="landing-lead-capture.html">Lead Capture</Link>
                                                            <div className="dropdown-divider border-0 d-lg-none"></div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <h6 className="dropdown-header text-primary">Personal</h6>
                                                            <Link className="dropdown-item" to="landing-resume.html">Resume</Link><Link className="dropdown-item" to="landing-portfolio.html">Portfolio</Link>
                                                            <div className="dropdown-divider border-0"></div>
                                                            <h6 className="dropdown-header text-primary">Header Styles</h6>
                                                            <Link className="dropdown-item" to="header-basic.html">Basic</Link><Link className="dropdown-item" to="header-basic-signup.html">Basic (Signup)</Link><Link className="dropdown-item" to="header-graphic.html">Graphic</Link><Link className="dropdown-item" to="header-graphic-signup.html">Graphic (Signup)</Link><Link className="dropdown-item" to="header-inner-page.html">Inner Page</Link><Link className="dropdown-item" to="header-nav-only.html">Nav Only</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown dropdown-lg no-caret">
                                        <Link className="nav-link dropdown-toggle" id="navbarDropdownPages" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages<i className="fas fa-chevron-right dropdown-arrow"></i></Link>
                                        <div className="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownPages">
                                            <div className="row no-gutters">
                                                <div className="col-lg-6 p-lg-5">
                                                    <h6 className="dropdown-header text-primary">Company</h6>
                                                    <Link className="dropdown-item" to="page-basic.html">Basic Page</Link><Link className="dropdown-item" to="page-company-about.html">About</Link><Link className="dropdown-item" to="page-company-pricing.html">Pricing</Link><Link className="dropdown-item" to="page-company-contact.html">Contact</Link><Link className="dropdown-item" to="page-company-terms.html">Terms</Link>
                                                    <div className="dropdown-divider border-0"></div>
                                                    <h6 className="dropdown-header text-primary">Support</h6>
                                                    <Link className="dropdown-item" to="page-help-center.html">Help Center</Link><Link className="dropdown-item" to="page-help-knowledgebase.html">Knowledgebase</Link><Link className="dropdown-item" to="page-help-message-center.html">Message Center</Link><Link className="dropdown-item" to="page-help-support-ticket.html">Support Ticket</Link>
                                                    <div className="dropdown-divider border-0 d-lg-none"></div>
                                                </div>
                                                <div className="col-lg-6 p-lg-5">
                                                    <h6 className="dropdown-header text-primary">Careers</h6>
                                                    <Link className="dropdown-item" to="page-careers-overview.html">Careers List</Link><Link className="dropdown-item" to="page-careers-listing.html">Position Details</Link>
                                                    <div className="dropdown-divider border-0"></div>
                                                    <h6 className="dropdown-header text-primary">Blog</h6>
                                                    <Link className="dropdown-item" to="page-blog-overview.html">Overview</Link><Link className="dropdown-item" to="page-blog-post.html">Post</Link><Link className="dropdown-item" to="page-blog-archive.html">Archive</Link>
                                                    <div className="dropdown-divider border-0"></div>
                                                    <h6 className="dropdown-header text-primary">Portfolio</h6>
                                                    <Link className="dropdown-item" to="page-portfolio-grid.html">Grid</Link><Link className="dropdown-item" to="page-portfolio-large-grid.html">Large Grid</Link><Link className="dropdown-item" to="page-portfolio-masonry.html">Masonry</Link><Link className="dropdown-item" to="page-portfolio-case-study.html">Case Study</Link><Link className="dropdown-item" to="page-portfolio-project.html">Project</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown no-caret">
                                        <Link className="nav-link dropdown-toggle" id="navbarDropdownDocs" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Documentation<i className="fas fa-chevron-right dropdown-arrow"></i></Link>
                                        <div className="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownDocs">
                                            <Link className="dropdown-item py-3" to="https://docs.startbootstrap.com/sb-ui-kit-pro/quickstart" target="_blank"
                                                ><div className="icon-stack bg-primary-soft text-primary mr-4"><i className="fas fa-book-open"></i></div>
                                                <div>
                                                    <div className="small text-gray-500">Documentation</div>
                                                    Usage instructions and reference
                                                </div></Link
                                            >
                                            <div className="dropdown-divider m-0"></div>
                                            <Link className="dropdown-item py-3" to="https://docs.startbootstrap.com/sb-ui-kit-pro/components" target="_blank"
                                                ><div className="icon-stack bg-primary-soft text-primary mr-4"><i className="fas fa-code"></i></div>
                                                <div>
                                                    <div className="small text-gray-500">Components</div>
                                                    Code snippets and reference
                                                </div></Link
                                            >
                                            <div className="dropdown-divider m-0"></div>
                                            <Link className="dropdown-item py-3" to="https://docs.startbootstrap.com/sb-ui-kit-pro/changelog" target="_blank"
                                                ><div className="icon-stack bg-primary-soft text-primary mr-4"><i className="fas fa-file"></i></div>
                                                <div>
                                                    <div className="small text-gray-500">Changelog</div>
                                                    Updates and changes
                                                </div></Link
                                            >
                                        </div>
                                    </li>
                                </ul>
                                {!isAuthenticated() && (
                        <Link className="btn-teal btn rounded-pill px-4 ml-lg-4" to="/registration/signin">Register School<i className="fas fa-arrow-right ml-1"></i>
                        </Link>
                         )}


{isAuthenticated() && (
            <Fragment>
            {/* <div className="col-1">
                <span className="nav-link" style={{cursor: 'pointer'}}  onClick={() => signout(() => {
                    history.push('/');
                })}>
                    <span className="badge badge-warning text-uppercase font-weight-bolder" style={{fontSize: "1rem"}}>SIGNOUT</span>
                </span>
            </div> */}


            {isAuthenticated() && isAuthenticated().user.role === 0 && (

                  <Link className="btn-teal btn rounded-pill px-4 ml-lg-4" to="/registration/signin"> {data.name}  <i className="fas fa-arrow-right ml-1"></i>
                  </Link>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                   <Link className="btn-teal btn rounded-pill px-4 ml-lg-4" to="/admin/dashboard">Admin Dashboard<i className="fas fa-arrow-right ml-1"></i>
                   </Link>
            )}

{isAuthenticated() && isAuthenticated().user.role === 2 && (
                   <Link className="btn-teal btn rounded-pill px-4 ml-lg-4" to="/teacher/dashboard">Teacher Dashboard<i className="fas fa-arrow-right ml-1"></i>
                   </Link>
            )}
           
            </Fragment>
           
         
        )}                            </div>
                        </div>
                    </nav>
        </Fragment>
    );
};

export default withRouter(Menu);

