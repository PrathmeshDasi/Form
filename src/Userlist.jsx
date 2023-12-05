import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Userlist(){
    var [data1,setdata]=useState([]);
    useEffect(()=>{
        laoddata();
    },[])
    const laoddata=async()=>{
        const result=await axios.get('http://localhost:3000/user');
        setdata(result.data);
    }
    return(
        <>
        <h1 className="text-center">Userlist</h1>
        <br /><br />
        <table border='1' width='100%'>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Mobile</th>
                <th>Resume</th>
                <th>Country</th>
                <th>Address</th>
                <th>Status</th>
            </tr>
            {
                data1.map((item)=>{
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{item.gender}</td>
                            <td>{item.date}</td>
                            <td>{item.mobile}</td>
                            <td>{item.resume}</td>
                            <td>{item.country}</td>
                            <td>{item.address}</td>
                            <td>
                                <NavLink to={`/deletelist/${item.id}`}><button className="btn btn-danger">Delete</button></NavLink>
                                <NavLink to={`/editlist/${item.id}`}><button className="btn btn-primary">Edit</button></NavLink>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
        </>
    )
}
export default Userlist;
