import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminHome from "./admin/Home"
import Home from "./core/Home"
import MultiSelectRegistration from "./core/MultiSelectRegistration"
import SchoolRegistration from "./core/SchoolRegistration"
import SignupSchoolAdminUser from "./core/SignupSchoolAdminUser"
import RegistrationCompletion from "./core/RegistrationCompletion"
import VerificationConfirmation from "./user/VerificationConfirmation";
import ResetPassword from "./user/ResetPassword";
import ForgetPassword from "./user/ForgetPassword";
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'
import TeacherRoute from './auth/TeacherRoute'
import Class from "./admin/Class";
import ClassUpdate from "./admin/ClassUpdate";
import User from "./admin/User";
import Students from "./admin/Students";
import Teachers from "./admin/Teachers";
import AdminUsers from "./admin/AdminUsers";
import UserUpdate from "./admin/UserUpdate";
import Upload from "./admin/Upload";
import Subject from "./admin/Subject";
import UpdateSubject from "./admin/UpdateSubject";
import TeacherHome from "./teacher/Home"





const Routes = () => {
  return (
    <BrowserRouter>
   {/* <Menu /> */}
      <Switch>
      <Route path="/" exact component={Home} />
     
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/registration/signin" exact component={MultiSelectRegistration} />
        <Route path="/school/registration" exact component={SchoolRegistration} />
        <Route path="/signup/school/admin/user/:refrenceId" exact component={SignupSchoolAdminUser} />
        <Route path="/signup/verification" exact component={RegistrationCompletion} />
        <Route path="/verification/:userId" exact component={VerificationConfirmation} />
        <Route path="/password/reset" exact component={ForgetPassword} />
        <Route path="/password/reset/:userId" exact component={ResetPassword} />


        <AdminRoute path="/admin/dashboard" exact component={AdminHome} />
        <AdminRoute path="/admin/create/class" exact component={Class} />
        <AdminRoute path="/admin/class/:classId" exact component={ClassUpdate} />
        <AdminRoute path="/admin/create/user" exact component={User} />
        <AdminRoute path="/admin/students" exact component={Students} />
        <AdminRoute path="/admin/teachers" exact component={Teachers} />
        <AdminRoute path="/admin/users" exact component={AdminUsers} />
        <AdminRoute path="/admin/user/:userId" exact component={UserUpdate} />
        <AdminRoute path="/admin/upload" exact component={Upload} />
        <AdminRoute path="/admin/create/subject" exact component={Subject} />
        <AdminRoute path="/admin/subject/:subjectId" exact component={UpdateSubject} />


        <TeacherHome path="/teacher/dashboard" exact component={TeacherHome} />




      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
