import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import {signup, sendVerificationMail} from '../auth';


const Signup = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    error: "",
    pop: false,
    success: false
  });
  const { firstname, lastname, email, password, error, success, pop } = values;

  const handleChnage = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };


  


  
//   const init = (email) => {
//     sendVerificationMail(email).then(data => {
//       if (data.error) {
//         setValues({ ...values, error: data.error, pop: false });
//       } else {
//         setValues({
//           ...values,
//           firstname: "",
//           lastname: "",
//           email: "",
//           password: "",
//           success: true,
//           pop: true
//         });
//       }
//     });
//   };



//   const clickSubmit = event => {
//     event.preventDefault();
//     setValues({...values, error:false});
//     signup({ firstname, lastname, email, password }).then(data => {
//       if (data.error) {
//         setValues({ ...values, error: data.error, success: false , pop: false});
//       } else {
//         setValues({
//           ...values,
//           firstname: "",
//           lastname: "",
//           email: "",
//           password: "",
//           success: true
//         });
//         init(email)

//       }
//     });
//   };

//   const showError = () => {
//     return (
     
//         <div
//           class="alert alert-danger"
//           role="alert"
//           style={{ display: error ? "" : "none" }}
//         >
//           {error}
//         </div>
    
   
//     );
//   };

//   const showSuccess = () => {
//     return (
//       <Fragment>
//         <div
//           class="alert alert-info"
//           role="alert"
//           style={{ display: success ? "" : "none" }}
//         >
//           New Account is created. Please <Link to="/signin">Signin</Link>  
//         </div>
//       </Fragment>
//     );
//   };

  const signupForm = () => {
    return (
      <Fragment>
      Signup
      </Fragment>
    );
  };

  return <Fragment>
    {signupForm()}
    </Fragment>;
};

export default Signup;
