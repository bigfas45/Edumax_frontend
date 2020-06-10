
import React, {Fragment} from "react";
import {Link, withRouter} from "react-router-dom";


const MultiSelectRegistration = () => {


    const content = () => {
        return(
            <Fragment>
                <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            {/* <!-- Create Organization--> */}
                            <div class="col-xl-5 col-lg-6 col-md-8 col-sm-11 mt-4">
                                <div class="card text-center h-100">
                                    <div class="card-body px-5 pt-5 d-flex flex-column">
                                        <div>
                                            <div class="h3 text-primary font-weight-300">Create</div>
                                            <p class="text-muted mb-4">Register your school to begin!!!</p>
                                        </div>
                                        <div class="icons-org-create align-items-center mx-auto mt-auto"><i class="icon-users" data-feather="users"></i><i class="icon-plus fas fa-plus"></i></div>
                                    </div>
                                    <div class="card-footer bg-transparent px-5 py-4">
                                        <div class="small text-center"><Link class="btn btn-block btn-primary" to="/school/registration">Create new school</Link></div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Join Organization--> */}
                            <div class="col-xl-5 col-lg-6 col-md-8 col-sm-11 mt-4">
                                <div class="card text-center h-100">
                                    <div class="card-body px-5 pt-5 d-flex flex-column align-items-between">
                                        <div>
                                            <div class="h3 text-secondary font-weight-300">Signin</div>
                                            <p class="text-muted mb-4">Enter an access Id or request access to an existing school</p>
                                        </div>
                                        <div class="icons-org-join align-items-center mx-auto"><i class="icon-user" data-feather="user"></i><i class="icon-arrow fas fa-long-arrow-alt-right"></i><i class="icon-users" data-feather="users"></i></div>
                                    </div>
                                    <div class="card-footer bg-transparent px-5 py-4">
                                        <div class="small text-center"><Link class="btn btn-block btn-secondary" to="/signin">Signin</Link></div>
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
                            <div class="col-md-6 small">Copyright &copy; Your edumax.com 2020</div>
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
            </Fragment>
        )
    }



    return(
        <Fragment >
            <body class="bg-primary">
                {content()}
            </body>
         
        </Fragment>
    )


}


export default MultiSelectRegistration;

