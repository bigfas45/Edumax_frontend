import { API } from "../config";
import queryString from "query-string";


export const getClassPrimary = () => {
    return fetch (`${API}/class/primary/list`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": 'application/json'
        },
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getClass = () => {
    return fetch (`${API}/child/list`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": 'application/json'
        },
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};




export const getClassChild = (classPrimary) => {
    return fetch (`${API}/class/child/${classPrimary}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": 'application/json'
        },
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};




export const createClass = (userId, token, schoolClass) => {
    return  fetch(`${API}/class/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(schoolClass)
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };


    export const readClass = (classId) => {
        return fetch (`${API}/class/${classId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json'
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const updateClass = (classId, userId,  token, schoolClass) => {
        return fetch (`${API}/class/${classId}/${userId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(schoolClass)
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };



    export const deleteClass = (classId, userId, token) => {
        return fetch (`${API}/class/${classId}/${userId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            },
         
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const deleteStudent = (studentId, userId, token) => {
        return fetch (`${API}/user/${studentId}/${userId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            },
         
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


  



    
    export const getStudents = (schoolId, userId, token) => {
        return fetch (`${API}/users/students/${schoolId}/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const getTeachers = (schoolId, userId, token) => {
        return fetch (`${API}/users/teachers/${schoolId}/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const getAdminUser = (schoolId, userId, token) => {
        return fetch (`${API}/users/adminUser/${schoolId}/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };



    export const list = params => {

        const query = queryString.stringify(params)
        console.log('query', query)
        return fetch (`${API}/user/list/search?${query}`, {
            method: "GET",
          
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };



    export const readUser = (userId) => {
        return fetch (`${API}/user/read/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json'
                
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };



    export const updateUsers = (userId, user) => {
        return fetch (`${API}/admin/user/${userId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const createFile = (userId, token, file) => {
        return fetch(`${API}/user/file/upload/${userId}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
          },
          body: file
        })
          .then(response => {
            return response.json();
          })
          .catch(err => {
            console.log(err);
          });
      };



      export const getUploadFile = () => {
        return fetch (`${API}/user/file/list`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json'
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const loadFile = (fileId) => {
        return fetch (`${API}/user/file/activate/${fileId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json'
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const deleteFile = (fileId, userId, token) => {
        return fetch (`${API}/user/file/remove/${fileId}/${userId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const createSubject = (userId, token , subject) => {
        return fetch (`${API}/subject/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(subject)
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const getsubjects = (userId, token) => {
        return fetch (`${API}/subjects/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const deleteSubject = (subjectid, userId, token) => {
        return fetch (`${API}/subject/${subjectid}/${userId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const getsubject = (subjectId, token) => {
        return fetch (`${API}/subject/${subjectId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    export const updatesubject = (subjectId, userId,  token, schoolClass) => {
        return fetch (`${API}/subject/${subjectId}/${userId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(schoolClass)
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };
