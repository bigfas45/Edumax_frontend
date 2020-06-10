import React, { Fragment, useEffect, useState, Component } from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import moment from "moment";

const ExportToExcel = ({post}) => {



  return (
    <div style={{marginRight: '25px'}}>
    <ReactHTMLTableToExcel
    id="test-table-xls-button"
    className="export"
    table="table-to-xls"
    filename="students"
    sheet="tablexls"
    buttonText="Export"

    />
    <table hidden="true" id="table-to-xls">
        <thead>
            <tr>
                <th>firstname</th>
                <th>lastname</th>
                <th>email</th>
                <th>Class</th>
                <th>house</th>
                <th>sex</th>
            </tr>
        </thead>
        <tbody>
                                            {post.map((r, i) => {
                                                return(
                                                    <tr key={i}>
                                                      
                                                        <td> {r.firstname}</td>
                                                        <td> {r.lastname}</td>
                                                        <td> {r.email}</td>
                                                        <td> {r.Class}</td>
                                                        <td> {r.house}</td>
                                                        <td> {r.sex}</td>
                                                    </tr>
                                                )
                                                
                                            })}
                                            
                                           
                                          
                                        </tbody>
                               
    </table>
    </div>
  
  );
};

export default ExportToExcel;
