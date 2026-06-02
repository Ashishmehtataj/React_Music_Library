import axios from "axios";
import { useState } from "react";

function AxiosPost(){
    // const [data,setData] = useState()
    const data = {fname : "" , lname : ""};
    const [inputdata,SetInputdata] = useState(data)
    const handleData=(e)=>{
        SetInputdata({...inputdata,[e.target.name]:e.target.value})
    }
    const HandleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputdata)
        .then((response)=>{
            console.log(response)
        })
    }
    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputdata)
        .then((response)=>{
            console.log(response)
        })
    }
    const handleDelete=(e)=>{
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response)
        })
    }
    return(
        <div>
            <label htmlFor="FName">First Name : </label>
            <input type="text" id="FName" className="border rounded outline-none" name="fname" value={inputdata.fname} onChange={handleData}/><br /><br />
            <label htmlFor="LName">Last Name : </label>
            <input type="text" id="LName" className="border rounded" name="lname" value={inputdata.lname} onChange={handleData}/><br />
            <br />
            <button className="flex justify-center items-center ml-8 border rounded p-4" onClick={HandleSubmit}>Submit</button>
            <br /><button className="flex justify-center items-center ml-8 border rounded p-4" onClick={handleUpdate}>Update</button>
          <br />  <button className="flex justify-center items-center ml-8 border rounded p-4" onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default AxiosPost;