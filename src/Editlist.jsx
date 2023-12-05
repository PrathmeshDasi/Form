import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Editlist(){
    
    const[data1,setdata]=useState();
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[mobile,setMobile]=useState();
    const[password,setPassword]=useState();
    const[date,setDate]=useState();
    const[gender,setGender]=useState();
    const[resume,setResume]=useState();
    const[country,setCountry]=useState();
    const[address,setAddress]=useState();
    var re=useNavigate();
    var pa=useParams();

    useEffect(()=>{
        loaddata();
    },[])

    var loaddata=async()=>{
        var re=await axios.get(`http://localhost:3000/user/${pa.id}`);
        setdata(re.data);
        setName(re.data.name);
        setAddress(re.data.address);
        setPassword(re.data.password)
        setGender(re.data.gender);
        setDate(re.data.date);
        setResume(re.data.resume);
        setCountry(re.data.country);
        setEmail(re.data.email);
        setMobile(re.data.mobile);
    }

    const submitform=async(id)=>{
        await axios.put(`http://localhost:3000/user/${id}`,{
            name:name,
            mobile:mobile,
            password:password,
            email:email,
            gender:gender,
            date:date,
            resume:resume,
            country:country,
            address:address,
        })
        .then(response=>{
            alert("successfully updated");
            re('/Userlist');
        })
        .catch(error=>{
            alert('not updated');
        })
    }
    return(
        <>
        <form>
            <label>Full Name :-</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} /><br /><br />
                <label>Email :-</label>
                <input type="email"onChange={(e)=>setEmail(e.target.value)} value={email}/><br /><br />
                <label>Password :-</label>
                <input type="password"onChange={(e)=>setPassword(e.target.value)} value={password}/><br /><br />
                <label>Confirm Password :-</label>
                <input type="password" /> <br /><br />
                <label>Gender :-</label>
                <input type="radio"onChange={(e)=>setGender(e.target.value)} value={gender}/> <label>Male</label> <input type="radio" onChange={(e)=>setGender(e.target.value)} value={gender}/> <label htmlFor="">Female</label><br />
                <label htmlFor="">DOB :-</label>
                <input type="date"onChange={(e)=>setDate(e.target.value)} value={date}/><br /><br />
                <label htmlFor="">Mobile :-</label>
                <input type="number"onChange={(e)=>setMobile(e.target.value)} value={mobile} /><br /><br />
                <label htmlFor="">Resume :-</label>
                <input type="file" onChange={(e)=>setResume(e.target.value)} value={resume}/><br /><br />
                <label htmlFor="">Country:-</label>
                <select name="" id=""><option onChange={(e)=>setCountry(e.target.value)} value={country}>India</option></select><br /><br />
                <label htmlFor="">Address :-</label>
                <input type="text"onChange={(e)=>setAddress(e.target.value)} value={address} /><br /><br />
                <button type="button" onClick={()=>submitform(data1.id)}>Save</button>
        </form>
        </>
    )
}
export default Editlist;