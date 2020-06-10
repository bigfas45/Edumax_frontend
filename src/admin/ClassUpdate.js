import React, {Fragment, useState, useEffect} from "react";
import {Link, Redirect} from "react-router-dom";
import {Spinner, Button} from "reactstrap";
import {isAuthenticated} from "../auth";
import {getClassPrimary, updateClass, readClass} from "./ApiAdmin";
import Header from "./Header"
import Menu from "./Menu"
import IMG from "../color/drawkit-content-man-alt.svg"
import ChildElement from "./ChildElement"

const ClassUpdate = ({match}) => {

    const {user, token} = isAuthenticated();

    const [data, setData] = useState([])
    const [values, setValues] = useState({
        parentClass: "",
        classes: [],
        classPrimaryId:"",
        childClass: "",
        teacher: "",
        loading: false,
        error: "",
        createdProduct: "",
        success: "",
        redirectToProfile: false

    });

    const {
        parentClass,
        classes,
        childClass,
        teacher,
        loading,
        classPrimaryId,
        error,
        createdProduct,
        success,
        redirectToProfile,
    } = values;


    



    const initGetClass = (classId) => {
        readClass(classId).then(data => {
              if(data.error){
                    setValues({...values, error: data.error})
              }else{
                // populate the state
                setValues({...values, 
                    parentClass: data.parentClass, 
                     classPrimaryId: data.childClass
                  
                  })
                // load security
        init()
              
             
              }
          })
      }



      const init = () => {
        getClassPrimary().then(data => {
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
        initGetClass(match.params.classId)
        init();
    }, []);

    const checkIfEmpty = (parentClass, childClass, teacher) => {

        if (parentClass !== '' && childClass !== '' && teacher !== '') {
            return {parentClass, childClass, teacher}
        } else if (parentClass === '' && childClass !== '' && teacher !== '') {
            return {childClass, teacher}
        } else if (parentClass !== '' && childClass === '' && teacher !== '') {
            return {parentClass, teacher}
        } else if (parentClass !== '' && childClass !== '' && teacher === '') {
            return {parentClass, childClass}
        } else if (parentClass === '' && childClass === '' && teacher !== '') {
            return {teacher}
        } else if (parentClass === '' && childClass !== '' && teacher === '') {
            return {childClass}
        } else if (parentClass !== '' && childClass === '' && teacher === '') {
            return {parentClass}
        }
    }


    const handleChange = name => event => {
        const value = event.target.value;
        setValues({
            ...values,
            error: "",
            [name]: value
        });
    };

    const clickSubmit = e => {
        e.preventDefault();
        setValues({
            ...values,
            error: "",
            loading: true
        });
        // make request to create category
        updateClass(match.params.classId, user._id, token, checkIfEmpty(parentClass, childClass, teacher)).then(data => {
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error
                });
            } else {
               
                setValues({
                    ...values,
                    parentClass: "",
                    childClass: "",
                    teacher: "",
                    loading: false,
                    error: false,
                    success: true,
                    redirectToProfile: true,
                    createdProduct: data.parentClass
                });

            }
        });
    };

    

    const redirectUser = () => {
        if (redirectToProfile) {
          if (!error) {
            return <Redirect to="/admin/create/class" />;
          }
        }
      };

    const showError = () => (

        <div style={
                {
                    display: error ? '' : 'none'
                }
            }
            class="alert alert-danger alert-solid"
            role="alert">Error!: {error} </div>

    );

    const showSuccess = () => (

        <div style={
                {
                    display: success ? '' : 'none'
                }
            }
            class="alert alert-success alert-solid"
            role="alert">
            Your class was added successfully
        </div>
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
                                <span>Class Update</span>
                            </h1>
                            <div class="page-header-subtitle">Update your class here!</div>
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
                        <div class="offset-3 col-lg-6">
                            <div id="default">
                                <div class="card mb-4">
                                    <div class="card-header">Class Form Controls</div>
                                    <div class="card-body">
                                        {
                                        showError()
                                    }
                                        {
                                        showSuccess()
                                    }
                                        <div class="sbp-preview">
                                            <div class="sbp-preview-content">
                                                <form onSubmit={clickSubmit}>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlSelect1">Class Primary</label>
                                                        <select onChange={
                                                                handleChange("childClass")
                                                            }
                                                         
                                                            class="form-control"
                                                            id="exampleFormControlSelect1">
                                                            <option> {classPrimaryId} </option>
                                                            {
                                                            data && data.map((c, i) => (
                                                                <option key={i}
                                                                    value={
                                                                        c._id
                                                                }>
                                                                    {
                                                                    c.parentClass
                                                                } </option>
                                                            ))
                                                        } </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">Class Child</label><input onChange={
                                                                handleChange("parentClass")
                                                            }
                                                            value={parentClass}
                                                            class="form-control"
                                                            id="exampleFormControlInput1"
                                                            type="text"
                                                            placeholder="Enter class name"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlSelect1">Class Teacher</label>
                                                        <select onChange={
                                                                handleChange("teacher")
                                                            }
                                                            value={teacher}
                                                            class="form-control"
                                                            id="exampleFormControlSelect1">
                                                            <option>~~~Please select class~~~</option>
                                                            <option value="5ec5b5dfab47e74e58af156a">2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>


                                                    {
                                                    loading && loading ? (
                                                        <Button className="btn btn-block btn-danger" variant="success" disabled>
                                                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
                                                            Loading...
                                                        </Button>
                                                    ) : (
                                                        <input type="submit" className="btn btn-block btn-primary" value="Update Class"/>
                                                    )
                                                } </form>
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


    return (
        <Fragment>
            <Header/>
            <div id="layoutSidenav">
                <Menu/>
                <div id="layoutSidenav_content">

                    <main> {
                        content()
                    }
                        {
                        classTableForm()
                    } 

                    {redirectUser()}
                    
                    </main>
                    {
                    footer()
                } </div>
            </div>
        </Fragment>
    )


}

export default ClassUpdate

