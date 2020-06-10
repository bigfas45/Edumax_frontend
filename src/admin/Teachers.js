import React, {Fragment, useState, useEffect} from "react";
import {Link, Redirect} from "react-router-dom";
import {Spinner, Button} from "reactstrap";
import {isAuthenticated} from "../auth";
import {getTeachers, deleteStudent} from "./ApiAdmin";
import Header from "./Header"
import Menu from "./Menu"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Search from "./Search"


const Teachers = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const {user, token} = isAuthenticated();
    
  const init = () => {
    getTeachers(user.schoolId, user._id, token).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setData(data);
      }
    });
  };

  const destroy = classId => {
    deleteStudent(classId, user._id, token).then(data => {
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
                                <span>Teachers</span>
                            </h1>
                            <div class="page-header-subtitle">Manage your teachers here!</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }


    const table = () => {
        return(
            <Fragment>
                 <div class="container-fluid mt-n10">
                        <div class="card mb-4">
                            <div class="card-header">Extended DataTables</div>
                            <div class="card-body">
                             
                                    <Search role={2} />
                             
                                    <div class="card-header">Total Number of Teachers {data.length}</div>
                                <div class="datatable table-responsive">
                                    <table class="table table-bordered table-hover"  width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>First name</th>
                                                <th>Last name</th>
                                                <th>email</th>
                                                <th>Class</th>
                                                <th>Age</th>
                                                <th>sex</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                            <th>First name</th>
                                                <th>Last name</th>
                                                <th>email</th>
                                                <th>Class</th>
                                                <th>Age</th>
                                                <th>sex</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {data.map((r,i) => {
                                                return(
                                                    <Fragment>  
                                            <tr key={i}>         
                                            <td> {r.firstname}</td>
                                                        <td> {r.lastname}</td>
                                                        <td> {r.email}</td>
                                                        <td> {r.studentClass.parentClass}</td>
                                                        <td> {r.age}</td>
                                                        <td> {r.sex}</td>
                                                <td><div class="badge badge-primary badge-pill"> {r.verification ===0 ? 'Verified' : 'Unverified' } </div></td>
                                                <td>
                                                <Link to={`/admin/user/${r._id}`}><i style={{color: "bule"}} class="fas fa-edit mr-3"></i></Link>   
                                                <span onClick={() => submit(r._id) }> <i   style={{color: "red"}} class="fas fa-trash ml-3"></i></span>
   
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
                    {table()}
                    
                    </main>
                    {
                    footer()
                } </div>
            </div>
        </Fragment>
    )





}


export default Teachers