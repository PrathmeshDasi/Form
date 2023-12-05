import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Deletelist(){
    let re=useNavigate();
    const para=useParams();
    useEffect(()=>{
        dele();
    })
    var dele=async()=>{
        await axios.delete(`http://localhost:3000/user/${para.id}`)
        .then(response=>{
            alert("successfully Deleted");
            re('/Userlist');
        })
        .catch(error=>{
            alert('error');
        })
    }
}
export default Deletelist;