import React, {Fragment, useState, useEffect} from "react";
import {Link, Redirect} from "react-router-dom";
import {getClass, list} from "./ApiAdmin";
import {isAuthenticated} from "../auth";


const Search = ({role}) => {
    const {user, token} = isAuthenticated();

    const [data, setData] = useState({
        classes: [],
        studentClass: '',
        search: '',
        results: [],
        Searched: false
    });

    const {
        classes,
        studentClass,
        search,
        results,
        Searched
    } = data


    const loadClasses = () => {
        getClass().then(data => {
            if (data.error) {
                console.log(data.erro)
            } else {
                setData({
                    ...data,
                    classes: data
                })
            }
        })
    };

    useEffect(() => {
        loadClasses()
    }, []);

    const searchData = () => {
        // console.log(search, studentClass);
        if (search) {
            list({search: search || undefined,  studentClass: studentClass, role: role, schoolId:user.schoolId })
            .then(response => {
                if (response.error) {
                    console.log(response.error)
                }else{
                    setData({...data, results: response, searched: true})
                }
            })
        }
    };

   
    const searchSubmit = e => { 
        e.preventDefault()
        searchData()
    };

    const handleChange = (name) => event => { 
        setData({...data, [name]: event.target.value, searched: false});
    };
    

    const searchedProduct = (results = []) => {
        return(
            <Fragment>
                     <div class="card-header">Total Number of searched user {results.length}</div>
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
                              {results.map((r,i) => {
                                  return(
                                      <Fragment>  
                              <tr key={i}>         
                              <td> {r.firstname}</td>
                                          <td> {r.lastname}</td>
                                          <td> {r.email}</td>
                                          <td> {r.studentClass}</td>
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
               
            </Fragment>
        )
    }
  


    const searchFrom = () => {
        return (
            <Fragment>
                <form onSubmit={searchSubmit}>
                   <span className="input-group-text">
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <select className="btn mr-2" onChange={handleChange("studentClass")}>
                                    <option value="All">~~Pick Class~~~</option>
                                    {classes.map((c, i) => {
                                        return(
                                            <option key={i} value={c._id}> {c.parentClass} </option> 
                                        )
                                    })}
                                   
                                </select>
                            </div>


                            <input type="search" className="form-control"
                            onChange={
                                handleChange('search')
                            }
                            placeholder="Search by First Name"/>
                        </div>
                        <div className="btn input-group-append" style={{border: 'none'}}>
                            <button className="input-group-text">Search</button>
                        </div>
                   </span>
                </form>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className="row">
                <div className="container mb-3">
                    {searchFrom()}
                </div>
            </div>


{results ?   searchedProduct(results) : ''}
          


        </Fragment>
    )

}


export default Search;
