import React, { useState, useEffect, Fragment } from "react";
import { getClassChild, deleteClass } from "./ApiAdmin";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../auth";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const ShowLikes = ({ parent }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const {user, token} = isAuthenticated();
  const init = () => {
    getClassChild(parent).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setData(data);
      }
    });
  };

  const destroy = classId => {
    deleteClass(classId, user._id, token).then(data => {
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
};


  useEffect(() => {
    init();
  }, []);

  return (
    <Fragment>
      {data.map((d, i) => {
        return (
          <Fragment>
            <tr key={i}>
              <td> <span class="badge badge-light"><small>{d._id}</small> </span></td>
              <td> {d.parentClass} </td>
              <td>{d.childClass.parentClass}</td>
              <td>
              <Link to={`/admin/class/${d._id}`}><i style={{color: "white"}} class="fas fa-edit mr-4"></i></Link> 

              <span onClick={() => submit(d._id) }>  <i style={{color: "red"}} class="fas fa-trash ml-3"></i></span>
              </td>
            </tr>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default ShowLikes;
