import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {updatePassword} from '../auth';



const ResetPassword = ({match}) => {

    const [values, setValues] = useState({
       
        password: "",
        error: "",
        success: false
      });
      const { password,  error, success } = values;
    
      const handleChnage = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };
    
    
      
    
    
      
      
    
    
      const clickSubmit = event => {
        event.preventDefault();
        
        setValues({...values, error:false});
        updatePassword( {password}, match.params.userId ).then(data => {
          if (data.error) {
            setValues({ ...values, error: data.error, success: false , pop: false});
          } else {
            setValues({
              ...values,
              password: "",
              success: true
            });
          }
        });
      };
    
      const showError = () => {
        return (
         
            <div
              class="alert alert-danger"
              role="alert"
              style={{ display: error ? "" : "none" }}
            >
              {error}
            </div>
        
       
        );
      };
    
      const showSuccess = () => {
        return (
          <Fragment>
            <div
              class="alert alert-info"
              role="alert"
              style={{ display: success ? "" : "none" }}
            >
             Your Password has been Reset <Link to="/">Signin</Link>  
            </div>
          </Fragment>
        );
      };




    const resetPasswordForm = () => {
       return(
           <Fragment>
             
           </Fragment>
       )
    }

    return(
        <Fragment>
           {resetPasswordForm()}
        </Fragment>
    )

}

export default ResetPassword