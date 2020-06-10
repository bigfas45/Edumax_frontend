import React, {Fragment, useState, useEffect} from "react";
import {Link, withRouter, Redirect} from "react-router-dom";
import {getSchoolRefId} from "./Apicore";
import {Spinner, Button} from "reactstrap";
import {signup, sendVerificationMail} from '../auth';
import $ from "jquery";


const SignupSchoolAdminUser = ({match}) => {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      
        createdProduct: "",
        error: "",
        school: [],
        loading: false,
        success: "",
        redirectToProfile: false

    });

    let  schoolId
    const {
        firstname,
        lastname,
        email,
        password,
        createdProduct,
        loading,
        school,
        error,
        success,
        redirectToProfile

    } = values;


    const init = (refId) => {
        getSchoolRefId(refId).then(data => {
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error
                });
            } else {
                setValues({
                    ...values,
                    school: data
                   
                });
            }
        });
    };


    const initEmail = (email) => {
        sendVerificationMail(email).then(data => {
          if (data.error) {
            setValues({ ...values, error: data.error, pop: false });
          } else {
            setValues({
              ...values,
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              success: true,
              pop: true
            });
          }
        });
      };



    useEffect(() => {
        init(match.params.refrenceId);
    }, []);


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
            error: false,
            loading: true
        });
        signup({
            firstname,
            lastname,
            email,
            password,
            schoolId
        }).then(data => {
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
                    firstname: "",
                    lastname: "",
                    email: "",
                    redirectToProfile: true,
                    password: "",
                    success: true
                });
                initEmail(email)

            }
        });
    };


    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/signup/verification"/>
            }
        }
    };

    const showSuccess = () => (

        <div style={
                {
                    display: createdProduct ? '' : 'none'
                }
            }
            className="alert alert-success alert-solid"
            role="alert">
            Your school was added successfully
        </div>
    );

    const showError = () => (

        <div style={
                {
                    display: error ? '' : 'none'
                }
            }
            className="alert alert-danger alert-solid"
            role="alert">Error!: {error} </div>

    );


    const content = () => {
        return (
            <Fragment> {
                school.map((sch, i) => {
                    schoolId = sch._id               
                    return (
                        <Fragment>
                            <div id="layoutAuthentication">
                                <div id="layoutAuthentication_content">
                                    <main>
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                {/* <!-- Create Organization--> */}
                                                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                                                    <div className="card mt-5">
                                                       
                                                        <div className="card-body p-5 text-center">
                                                        {showSuccess()}
                                                        {showError()}
                                                            <div className="icons-org-create align-items-center mx-auto">
                                                                <i className="icon-users" data-feather="users"></i>
                                                                <i className="icon-plus fas fa-plus"></i>
                                                            </div>
                                                            <div className="h3 text-primary font-weight-300 mb-0">Register admin user for &nbsp; 
                                                                <span className="h2 text-primary font-weight-400 mb-0">
                                                                    <b>{
                                                                        sch.name
                                                                    }</b>
                                                                </span>
                                                                .</div>
                                                        </div>
                                                        <hr className="m-0"/>
                                                        <div className="card-body p-5">
                                                            <form>
                                                                <div className="form-group"><input onChange={
                                                                            handleChnage("firstname")
                                                                        }
                                                                        className="form-control form-control-solid"
                                                                        type="text"
                                                                        placeholder="First name"/></div>
                                                                <div className="form-group"><input onChange={
                                                                            handleChnage("lastname")
                                                                        }
                                                                        className="form-control form-control-solid"
                                                                        type="email"
                                                                        placeholder="Last name"/></div>
                                                                <div className="form-group"><input onChange={
                                                                            handleChnage("email")
                                                                        }
                                                                        className="form-control form-control-solid"
                                                                        type="text"
                                                                        placeholder="name@example.com"
                                                                        aria-label="Add User"
                                                                        aria-describedby="addUser"/></div>
                                                                <div className="form-group"><input onChange={
                                                                            handleChnage("password")
                                                                        }
                                                                        className="form-control form-control-solid"
                                                                        type="password"
                                                                        placeholder="password"
                                                                        aria-label="Add User"
                                                                        aria-describedby="addUser"/></div>

                                                                <div className="form-group">
                                                                    {
                                                                    loading && loading ? (
                                                                        <Button className="btn btn-block btn-primary" variant="success" disabled>
                                                                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
                                                                            Loading...
                                                                        </Button>
                                                                    ) : (
                                                                        <button onClick={clickSubmit}
                                                                            className="btn btn-block btn-primary"
                                                                            type="submit">
                                                                           Add user
                                                                        </button>
                                                                    )
                                                                } </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                                <div id="layoutAuthentication_footer">
                                    <footer className="footer mt-auto footer-dark">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-6 small">Copyright &copy; Your Website 2020</div>
                                                <div className="col-md-6 text-md-right small">
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
                })
            } </Fragment>
        )
    }


    return (
        <Fragment>
            <div className="bg-primary">
                {
                content()
            } 
            {redirectUser()}
            </div>

        </Fragment>
    )


}


export default SignupSchoolAdminUser;

