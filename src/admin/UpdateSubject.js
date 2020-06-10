import React, {Fragment, useState, useEffect} from "react";
import {Link, Redirect} from "react-router-dom";
import {Spinner, Button} from "reactstrap";
import {isAuthenticated} from "../auth";
import {getClass, updatesubject, getTeachers, getsubject} from "./ApiAdmin";
import Header from "./Header"
import Menu from "./Menu"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Search from "./Search"


const SubjectUpdate = ({match}) => {

    const {user, token} = isAuthenticated();
    const [values, setValues] = useState({
     
        classParent:"",
        error: "",
        name:"",
        teacher:"",
        loading: false,
        success: "",
        redirectToProfile: false
    });

   
    const {
      
        classParent,
        loading,
        name,
        error,
        teacher,
        success,
        redirectToProfile
    } = values;

    const [teachers, setTeachers] = useState([]);
    const [classes, setClasses] = useState([]);

    let count =0;


    const init = () => {
        getClass().then(data2 => {
            if (data2.error) {
                setValues({
                    ...values,
                    error: data2.error
                });
            } else {
                setClasses(data2)
                initGetTeachers()
            }
        });
    };
  
    const initSubject = (subjectId) => {
        getsubject(subjectId,  token).then(subject => {
            if (subject.error) {
                setValues({
                    ...values,
                    error: subject.error
                });
            } else {
                setValues({
                    ...values,
                   name : subject.name,
                   classParent: subject.classParent.parentClass,
                   teacher: subject.teacher.firstname
                });          
              }
        });
    };
    
    const initGetTeachers = () => {
        getTeachers(user.schoolId, user._id, token).then(data => {
          if (data.error) {
            setValues({
                ...values,
                error: data.error
            });
          } else {
            setTeachers(data)
          }
        });
      };

   


    
   

 





    useEffect(() => {
        init();
        initSubject(match.params.subjectId)
      
     
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
        updatesubject(match.params.subjectId, user._id, token,{name, teacher, classParent}).then(data => {
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error.message,
                    success: false,
                    pop: false
                });
            } else {
                setValues({
                    ...values,
                  
                    redirectToProfile: true,
                    password: "",
                    success: true
                });

            
               

            }
        });
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
            Your upload was successfully
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
                                <span>Subject</span>
                            </h1>
                            <div class="page-header-subtitle">Manage your subject here!</div>
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
                                    <div class="card-header">Subject Form Controls</div>
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
                                                        <label for="exampleFormControlSelect1"> Class</label>
                                                        <select 
                                                            class="form-control"
                                                            onChange={
                                                                handleChnage("classParent")
                                                            }
                                                           
                                                            id="exampleFormControlSelect1">
                                                            <option>{classParent} </option>
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
                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">Subject</label><input
                                                            class="form-control"
                                                            onChange={
                                                                handleChnage("name")
                                                            }
                                                            value={name}
                                                            id="exampleFormControlInput1"
                                                            type="text"
                                                            placeholder="Enter subject name"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="exampleFormControlSelect1">Subject Teacher</label>
                                                        <select 
                                                            class="form-control"
                                                            onChange={
                                                                handleChnage("teacher")
                                                            }
                                                         
                                                            id="exampleFormControlSelect1">
                                                            <option>{teacher}</option>
                                                            {teachers.map((t, i) => {
                                                                return(
                                                                    <option value={t._id}>{t.firstname} {t.lastname} ({t.email}) </option>
                                                                )
                                                            })}
                                                          
                                                          
                                                        </select>
                                                    </div>


                                                    


                                                    {
                                                    loading && loading ? (
                                                        <Button className="btn btn-block btn-danger" variant="success" disabled>
                                                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
                                                            Loading...
                                                        </Button>
                                                    ) : (
                                                        <input type="submit" className="btn btn-block btn-primary" value="Update subject"/>
                                                    )
                                                } 
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
        <Header/>
      <div id="layoutSidenav">
          <Menu/>
          <div id="layoutSidenav_content">

              <main> 
              {content()}
              {classTableForm()}
            
              </main>
              {
              footer()
          } </div>
      </div>
  </Fragment>
    )

}

export default SubjectUpdate