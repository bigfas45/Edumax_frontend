import { API } from "../config";



export const createSchool = (school) => {
    return  fetch(`${API}/school/info/create`, {
         method: "POST",
         headers: {
             Accept: "application/json"
         },
         body: school
     })
         .then(response => {
             return response.json();
         })
         .catch(error => {
             console.log(error);
         });
 };


 export const getSchoolRefId = (refrenceId) => {
   
    return  fetch(`${API}/school/${refrenceId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              
            },
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };



    export const getSchoolInfo = (schId) => {
   
        return  fetch(`${API}/school/info/${schId}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  
                },
            })
                .then(response => {
                    return response.json();
                })
                .catch(err => {
                    console.log(err);
                });
        };
    
