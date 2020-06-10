import React, {Fragment, useState, useEffect} from "react";
import {Link, withRouter, Redirect} from "react-router-dom";
import {createSchool} from "./Apicore";
import {Spinner, Button} from "reactstrap";
import randomstring from "randomstring";
import $ from "jquery";



const SchoolRegistration = () => {
    const [values, setValues] = useState({
        name: "",
        createdProduct: "",
        error:"",
        refrence: "",
        loading: false,
        success: "",
        redirectToProfile: false,
        formData: new FormData()
    });

    const {
        name,
        createdProduct,
        loading,
        error,
        refrence,
        success,
        redirectToProfile,
        formData
    } = values;


    const handleChange = name => event => {
        const value =  event.target.value;
        let rand2 =0
        formData.set(name, value);
        formData.append('referenceId', rand2 = rand);
        setValues({
            ...values,
            refrence: rand2,
            error: "",
            createdProduct: "",
            [name]: value
        });
    };

    const rand = randomstring.generate()


    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", createdProduct: "", loading: true });
    
        createSchool(formData).then(data2 => {
          if (data2.error) {
            setValues({ ...values, error: data2.error, createdProduct: ""  });
          } else {
            setValues({
              ...values,
              name: "",
              loading: false,
              error: false,
              success: true,
              redirectToProfile: true,
              createdProduct: data2.name
            });
          }
        });
      };


      const redirectUser = () => {
        if (redirectToProfile) {
          if (!error) {
            return <Redirect to={`/signup/school/admin/user/${refrence}`}/>
          }
        }
      };
    
      const showSuccess = () => (
        
<div style={{display: createdProduct ? '' : 'none'}} class="alert alert-success alert-solid" role="alert"> Your school was added successfully </div>
      );
    
      const showError = () => (
       
    <div style={{display: error ? '' : 'none'}} class="alert alert-danger alert-solid" role="alert">Error!:  {error} </div>

      );
    
    


    const content = () => {
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
                                                <div className="h3 text-primary font-weight-300 mb-0">Create a school
                                                </div>
                                            </div>
                                            <hr className="m-0"/>
                                            <div className="card-body p-5">
                                                <form onSubmit={clickSubmit}>
                                                    <div className="form-group">
                                                        <input onChange={
                                                                handleChange("name")
                                                            }
                                                            value={name}
                                                            className="form-control form-control-solid"
                                                            type="text"
                                                            placeholder="Enter new school name"
                                                           
                                                          /></div>
                                                  
                                                      
            {loading && loading ? (<Button className="btn btn-block btn-danger"variant="success" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>) : ( <input type="submit"  className="btn btn-block btn-primary"  value="Create school" />)}

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
    }


    return (
        <Fragment>
            <body className="bg-primary">
                {
                content()
            }
            {redirectUser()} </body>

        </Fragment>
    )


}


export default SchoolRegistration;

