import React from "react";
import axios from "axios";
class  Form extends React.Component{
    constructor(){
        super();
        this.state={
            "name":null,
            "email":null,
            "password":null,
            "gender":null,
            "date":null,
            "mobile":null,
            "resume":null,
            "country":null,
            "adderss":null,
        }
    }

    setname=(event)=>{
        this.setState({"name":event.target.value});
    }
    setemail=(event)=>{
        this.setState({"email":event.target.value});
    }
    setpassword=(event)=>{
        this.setState({"password":event.target.value});
    }
    setgender=(event)=>{
        this.setState({"gender":event.target.value});
    }
    setdate=(event)=>{
        this.setState({"date":event.target.value});
    }
    setmobile=(event)=>{
        this.setState({"mobile":event.target.value});
    }
    setresume=(event)=>{
        this.setState({"resume":event.target.value});
    }
    setcountry=(event)=>{
        this.setState({"country":event.target.value});
    }
    setaddress=(event)=>{
        this.setState({"address":event.target.value});
    }

    saveform=async(event)=>{
        event.preventDefault()
        await axios.post('http://localhost:3000/user',this.state);
        alert("successfully inserted")
    }
    render(){
        return(
            <>
            <div className="text-center">
            <h1 className="text-center">Emoployee Registration Form</h1><br />
            <form onSubmit={this.saveform}>
            <label>Full Name :-</label>
                <input type="text" value={this.state.name} onChange={this.setname} /><br /><br />
                <label>Email :-</label>
                <input type="email" value={this.state.email} onChange={this.setemail}/><br /><br />
                <label>Password :-</label>
                <input type="password" value={this.state.password} onChange={this.setpassword}/><br /><br />
                <label>Confirm Password :-</label>
                <input type="password" /> <br /><br />
                <label>Gender :-</label>
                <input type="radio"value={this.state.gender} onChange={this.setgender} /> <label>Male</label> <input type="radio" value={this.state.gender} onChange={this.setgender}/> <label htmlFor="">Female</label><br />
                <label htmlFor="">DOB :-</label>
                <input type="date" value={this.state.date} onChange={this.setdate}/><br /><br />
                <label htmlFor="">Mobile :-</label>
                <input type="number"value={this.state.mobile} onChange={this.setmobile} /><br /><br />
                <label htmlFor="">Resume :-</label>
                <input type="file" value={this.state.resume} onChange={this.setresume} /><br /><br />
                <label htmlFor="">Country:-</label>
                <select name="" id=""><option value={this.state.country} onChange={this.setcountry}>India</option></select><br /><br />
                <label htmlFor="">Address :-</label>
                <input type="text" value={this.state.address} onChange={this.setaddress} /><br /><br />
                <button>save</button>
            </form>
            </div>
                
            </>
        )
    }
}
export default Form;