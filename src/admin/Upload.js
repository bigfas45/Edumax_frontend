import React, { Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Spinner } from "reactstrap";
import Header from "./Header"
import Menu from "./Menu"
import IMG from "../color/drawkit-content-man-alt.svg"
import { signout, isAuthenticated } from "../auth";
import {createFile, getUploadFile, loadFile, deleteFile} from "./ApiAdmin";
import {API} from '../config';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const Upload = () => {
    const {user, token} = isAuthenticated();


    const [values, setValues] = useState({
        name: "",
        file: "",
        loading: false,
        error: "",
        files: [],
        createdMail: "",
        success:"",
        redirectToProfile: false,
        formData: ""
      });
    
      const {
        name,
        loading,
        error,
        files,
        createdMail,
        success,
        redirectToProfile,
        formData
      } = values;




      


      const init = () => {
        getUploadFile().then(data => {
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error
                });
            } else {
                setValues({...values, files: data, formData: new FormData()})
            }
        });
   
  }


  const activateFile = classId => {
    loadFile(classId).then(dataLoad => {
        if (dataLoad.error) {
            setValues({
                ...values,
                error: dataLoad.error.errmsg
            });        }else{
            setValues({...values, success: true})
        }
    })
}

const destroy = fileid => {
    deleteFile(fileid, user._id, token).then(data => {
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
  }, []);


  const handleChnage = name => event => {
    const value = name === "file" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values,error: "", success: "",  [name]: value });
  };


const clickSubmit = event => {
    //
    event.preventDefault();
    setValues({ ...values, error: "", loading: true, success: "" });

    createFile(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          file: "",
          loading: false,
          createdMail: data.subject
        });
        init();
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





    const getClassTable = () => {
        return (
            <Fragment>
                <div class="col-lg-6">
                    <div id="default">
                        <div class="card mb-4">
                            <div class="card-header">Upload Table Manage</div>
                            <div class="card-body">
                                <div class="sbp-preview">
                                    <div class="sbp-preview-content">
                                        {showError()}
                                        {showSuccess()}
                                        <table class="table table-sm table-dark">
                                            <thead>
                                                <tr>
                                                <th>#</th> 
                                                <th>Name</th>
                                                <th>Read </th>
                                                <th> Load  </th>
                                                <th>Delete </th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {files.map((f,i) => {
                                                    return(
                                                        <Fragment>
                                                            <tr key={i}>
                                                                <td> </td>
                                                                <td> {f.name} </td>
                                                                <td><a href={`${API}/user/get/file/${f._id}`} alt={f.name} class="download-link badge badge-primary badge-pill">Read</a></td>
                                                                <td> <span  onClick={() => activateFile(f._id) } class="download-link badge badge-warning badge-pill">Load</span> </td>
                                                                <td> {f.name === 'Template' ? '' : <span  onClick={() => submit(f._id) } class="download-link badge badge-danger badge-pill">remove</span>} </td>
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
                                    <div class="card-header">Upload Form Controls</div>
                                    <div class="card-body">
                                      
                                        <div class="sbp-preview">
                                            <div class="sbp-preview-content">
                                                <form  onSubmit={clickSubmit}>
                                                   
                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">Name</label>
                                                        <input 
                                                                onChange={handleChnage("name")}
                                                                value={name}
                                                            class="form-control"
                                                            id="exampleFormControlInput1"
                                                            type="text"
                                                            placeholder="Enter class name"/>
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="exampleFormControlInput1">Name</label>
                                                        <input 
                                                                onChange={handleChnage("file")}
                                                                name="file"
                                                            class="form-control"
                                                            id="exampleFormControlInput1"
                                                            type="file"
                                                            placeholder="Enter class name"/>
                                                    </div>
                                                        <input type="submit" className="btn btn-block btn-primary" value="Upoad student file"/>
                                                    
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
                                <span>Upload user</span>
                            </h1>
                            <div class="page-header-subtitle">Upload users here!</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )

    }
    
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

    return(
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
                  
                     </main>
                {
                footer()
            } </div>
        </div>
    </Fragment>
    )



}


export default Upload