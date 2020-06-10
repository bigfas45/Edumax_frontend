import React, {Fragment, useState, useEffect} from "react";
import {Link, Redirect} from "react-router-dom";
import {Spinner, Button} from "reactstrap";
import {isAuthenticated} from "../auth";
import { getClass} from "./ApiAdmin";
import Header from "./Header"
import Menu from "./Menu"
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {signup, sendVerificationMail} from '../auth';
import {getSchoolInfo} from "../core/Apicore";


const User = () => {

    const {user, token} = isAuthenticated();
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        studentClass:"",
        schoolId:  user.schoolId,
        house:"",
        age:"",
        role:"",
        sex:"",
        school:"",
        verification:"",
        password: "",
        createdProduct: "",
        error: "",
        classes: [],
        loading: false,
        success: "",
        redirectToProfile: false
    });

   
    const {
        firstname,
        lastname,
        email,
        studentClass,
        schoolId,
        house,
        age,
        role,
        sex,
        school,
        verification,
        password,
        createdProduct,
        loading,
        classes,
        error,
        success,
        redirectToProfile
    } = values;

    const [data, setData] = useState([]);

    const init = () => {
        getClass().then(data => {
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error
                });
            } else {
                setValues({
                    ...values,
                    classes: data
                });
            }
        });
    };


    const initSchool = () => {
        getSchoolInfo(user.schoolId).then(data => {
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error
                });
            } else {
               setData(data)
            }
        });
    };

    useEffect(() => {
        init();
        initSchool();
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
            studentClass,
            schoolId,
            house,
            age,
            role,
            sex,
            verification,
            password
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
                    studentClass:"",
                    role:"",
                    verification:"",
                    house:"",
                    age:"",
                    sex:"",
                    password:"",
                    redirectToProfile: true,
                    password: "",
                    success: true
                });
               

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
                    display: success ? '' : 'none'
                }
            }
            className="alert alert-success alert-solid"
            role="alert">
            User was added successfully
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






    
    const footer = () => {
        return (
            <Fragment>
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
            </Fragment>
        )
    }
    
    const content = () => {
        return (
            <Fragment>


                <div class="page-header pb-10 page-header-dark bg-gradient-primary-to-secondary">
                    <div class="container-fluid">
                        <div class="page-header-content">
                            <h1 class="page-header-title">
                                <div class="page-header-icon">
                                    <i data-feather="file"></i>
                                </div>
                                <span>User</span>
                            </h1>
                            <div class="page-header-subtitle">Create your users here!</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )

    }

    var mm = (firstname.slice(0,1)+lastname+"@"+data.name+".com").toLowerCase()


    const sideBar = () => {
        return (
            <Fragment>


<div class="col-lg-3">
                                <div class="nav-sticky">
                                    <div class="card">
                                        <div class="card-body">
                                            <ul class="nav flex-column" id="stickyNav">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#default">Default Colors</a>
                                                    <ul class="nav flex-column ml-3">
                                                        <li class="nav-item"><a class="nav-link" href="#defaultSolid">Solid</a></li>
                                                        <li class="nav-item"><a class="nav-link" href="#defaultOutline">Outline</a></li>
                                                    </ul>
                                                </li>
                                               
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#icon">Icon</a>
                                                    <ul class="nav flex-column ml-3">
                                                        <li class="nav-item"><a class="nav-link" href="#iconFeather">Feather Icons</a></li>
                                                        <li class="nav-item"><a class="nav-link" href="#iconFontAwesome">Font Awesome Icons</a></li>
                                                        <li class="nav-item"><a class="nav-link" href="#iconText">Text</a></li>
                                                        <li class="nav-item"><a class="nav-link" href="#iconOutline">Outline</a></li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item"><a class="nav-link" href="#transparent">Transparent</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#sizing">Sizing</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#social">Social</a></li>
                                                <li class="nav-item"><a class="nav-link" href="#extending">Extending</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


            </Fragment>
        )
    }
    
    
    const classTableForm = () => {
        return (
            <Fragment>

                <div class="container-fluid mt-n10">
                    <div class="row">
                       
                        <div class="offset-1 col-lg-10">
                            <div id="default">
                                <div class="card mb-4">
                                    <div class="card-header">User Form Controls</div>
                                    <div class="card-body">
                                        { showError()}
                                        { showSuccess() }
                                        <div class="sbp-preview">
                                            <div class="sbp-preview-content">
                                            <form >
                                            <div class="row">
                                            <div class="form-group col-md-6">
                                                        <label for="exampleFormControlInput1">First name</label><input
                                                            class="form-control"
                                                            onChange={
                                                                handleChnage("firstname")
                                                            }
                                                            value={firstname}
                                                            id="exampleFormControlInput1"
                                                            type="text"
                                                            placeholder="Enter First name"/>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="exampleFormControlInput1">Last name</label><input
                                                            class="form-control"
                                                            onChange={
                                                                handleChnage("lastname")
                                                            }
                                                            value={lastname}
                                                            id="exampleFormControlInput1"
                                                            type="text"
                                                            placeholder="Enter Last name"/>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="exampleFormControlInput1">Email</label><input
                                                            class="form-control"
                                                            onChange={
                                                                handleChnage("email")
                                                            }
                                                            value={email}
                                                            id="exampleFormControlInput1"
                                                            type="text"
                                                            placeholder="Enter Email "/>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="exampleFormControlSelect1"> Class</label>
                                                        <select 
                                                            class="form-control"
                                                            onChange={
                                                                handleChnage("studentClass")
                                                            }
                                                            value={studentClass}
                                                            id="exampleFormControlSelect1">
                                                            <option>~~~Please select class~~~</option>
                                                            {
                                                            classes && classes.map((c, i) => (
                                                                <option key={i}
                                                                    value={
                                                                        c._id
                                                                }>
                                                                    {
                                                                    c.parentClass
                                                                } </option>
                                                            ))
                                                        }
                                                           </select>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="exampleFormControlInput1"> House</label><input
                                                            class="form-control"
                                                            onChange={
                                                                handleChnage("house")
                                                            }
                                                            value={house}
                                                            id="exampleFormControlInput1"
                                                            type="text"
                                                            placeholder="Enter House"/>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="exampleFormControlInput1"> Age</label><input
                                                            class="form-control"
                                                            onChange={
                                                                handleChnage("age")
                                                            }
                                                            value={age}
                                                            id="exampleFormControlInput1"
                                                            type="text"
                                                            placeholder="Enter Age"/>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="exampleFormControlSelect1">Role</label>
                                                        <select 
                                                            class="form-control"
                                                            onChange={
                                                                handleChnage("role")
                                                            }
                                                            value={role}
                                                            id="exampleFormControlSelect1">
                                                            <option>~~~Please select role~~~</option>
                                                            <option value="0">Student</option>
                                                            <option value="1">Admin</option>
                                                            <option value="2">Teacher</option>
                                                            {/* <option value="0">Student</option> */}
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="exampleFormControlSelect1">Sex</label>
                                                        <select 
                                                            class="form-control"
                                                            onChange={
                                                                handleChnage("sex")
                                                            }
                                                            value={sex}
                                                            id="exampleFormControlSelect1">
                                                            <option>~~~Please select Sex~~~</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                           
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="exampleFormControlSelect1">Verification</label>
                                                        <select 
                                                            class="form-control"
                                                            onChange={
                                                                handleChnage("verification")
                                                            }
                                                            value={verification}
                                                            id="exampleFormControlSelect1">
                                                            <option>~~~Please select class~~~</option>
                                                           
                                                            <option value="0">Activate</option>
                                                            <option value="1">Deactivate</option>
                                                         
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="exampleFormControlInput1"> Password</label><input
                                                            class="form-control"
                                                            onChange={
                                                                handleChnage("password")
                                                            }
                                                            value={password}
                                                            id="exampleFormControlInput1"
                                                            type="password"
                                                            placeholder="Enter password"/>
                                                    </div>

                                                   

                                                    <div class="form-group col-md-6">
                                                    {
                                                    loading && loading ? (
                                                        <Button className="btn  btn-danger form-control  mt-4" variant="success" disabled>
                                                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
                                                            Loading...
                                                        </Button>
                                                    ) : (
                                                        <input onClick={clickSubmit} type="submit" className="btn  btn-primary form-control mt-4" value="Create User"/>
                                                    )
                                                }
                                                 </div>
                                                </div>
                                                 </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       </div>
                </div>


            </Fragment>
        )
    }


    return(
        <Fragment>
             <Header/>            <div id="layoutSidenav">
                <Menu/>
                <div id="layoutSidenav_content">

                    <main> {
                        content()
                    }
                        {
                        classTableForm()
                    } 
           
                    {school}
                    
                    </main>
                    {
                    footer()
                } </div>
            </div>
        </Fragment>
    )

}


export default User