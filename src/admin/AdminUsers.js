import React, {Fragment, useState, useEffect} from "react";
import {Link, Redirect} from "react-router-dom";
import {Spinner, Button} from "reactstrap";
import {isAuthenticated} from "../auth";
import {getAdminUser} from "./ApiAdmin";
import Header from "./Header"
import Menu from "./Menu"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Search from "./Search"


const AdminUsers = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const {user, token} = isAuthenticated();
    
  const init = () => {
    getAdminUser(user.schoolId, user._id, token).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setData(data);
      }
    });
  };

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
                                <span>Admin Users</span>
                            </h1>
                            <div class="page-header-subtitle">Manage your admin users here!</div>
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
                             
                                    <Search role={1} />
                             
                                    <div class="card-header">Total Number of Users {data.length}</div>
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
                                                        <td> </td>
                                                        <td> {r.age}</td>
                                                        <td> {r.sex}</td>
                                                <td><div class="badge badge-primary badge-pill"> {r.verification ===0 ? 'Verified' : 'Unverified' } </div></td>
                                                <td>
                                                <Link to={`/admin/user/${r._id}`}><i style={{color: "bule"}} class="fas fa-edit mr-3"></i></Link>   
                                                <span> <i   style={{color: "red"}} class="fas fa-trash ml-3"></i></span>
   
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


export default AdminUsers