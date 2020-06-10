import React, {Fragment, useState, useEffect} from "react";
import {Link, Redirect} from "react-router-dom";
import {Spinner, Button} from "reactstrap";
import {isAuthenticated} from "../auth";
import {getClass, createSubject, getTeachers, getsubjects, deleteSubject} from "./ApiAdmin";
import Header from "./Header"
import Menu from "./Menu"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Search from "./Search"


const Subject = () => {

    const {user, token} = isAuthenticated();
    const [values, setValues] = useState({
     
        classParent:"",
        error: "",
        name:"",
        classes: [],
        teacher:"",
        loading: false,
        success: "",
        redirectToProfile: false
    });

   
    const {
      
        classParent,
        loading,
        classes,
        name,
        error,
        teacher,
        success,
        redirectToProfile
    } = values;

    const [teachers, setTeachers] = useState([]);
    const [subjects, setSubjects] = useState([]);
    let count =0;


    const initSubject = () => {
        getsubjects(user._id, token).then(subject => {
            if (subject.error) {
                setValues({
                    ...values,
                    error: subject.error
                });
            } else {
                setSubjects(subject)
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

    const init = () => {
        getClass().then(data2 => {
            if (data2.error) {
                setValues({
                    ...values,
                    error: data2.error
                });
            } else {
                setValues({
                    ...values,
                    classes: data2
                });
                initGetTeachers()
            }
        });
    };


    
    const destroy = classId => {
        deleteSubject(classId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            }else{
                init();
            }
        })
    }


    const submit = (classId) => {
        confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => destroy(classId)
            },
            {
              label: 'No',
              onClick: () =>init()
            }
          ]
        });
      }






    useEffect(() => {
        init();
        initSubject()
      
     
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
        createSubject(user._id, token,{name, teacher, classParent}).then(data => {
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

                initSubject();
               

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

    const getClassTable = () => {
        return (
            <Fragment>


                <div class="col-lg-6">
                    <div id="default">
                        <div class="card mb-4">
                            <div class="card-header">Subject Table Manage</div>
                            <div class="card-body">
                                <div class="sbp-preview">
                                    <div class="sbp-preview-content">

                                        <table class="table table-sm table-dark">
                                            <thead>
                                                <tr>
                                                <th>id</th> 
                                                <th>Subject</th>
                                                <th>Class</th>
                                                <th>Teacher</th>
                                                <th>Action</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody>
                                               {subjects.map((s, i) => {
                                                   count++
                                                   return(
                                                           <Fragment>
                                                            <tr key={i} class="bg-primary">
                                                                <td> {count} </td>
                                                                <td>{s.name}</td>
                                                                <td>{s.classParent !== null ?  s.classParent.parentClass : ''  } </td>
                                                                <td>{s.teacher !== null ?  s.teacher.email : ''  } </td>
                                                                <td>
                                                                    <Link to={`/admin/subject/${s._id}`}><i style={{color: "white"}} class="fas fa-edit mr-4"></i></Link> 
                                                                    <span onClick={() => submit(s._id) }> <i   style={{color: "red"}} class="fas fa-trash ml-3"></i></span>
                                                                 </td>
                                                            </tr>
                                                           </Fragment>
                                                   )
                                               })}
                                                            
                                                          
                                                      
                                            
                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
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
                        <div class="col-lg-6">
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
                                                            value={classParent}
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
                                                            value={teacher}
                                                            id="exampleFormControlSelect1">
                                                            <option>~~~Please select class~~~</option>
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
                                                        <input type="submit" className="btn btn-block btn-primary" value="Create subject"/>
                                                    )
                                                } 
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                        getClassTable()
                    } </div>
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

export default Subject