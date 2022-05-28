import axios from 'axios';
import React, {  useState } from 'react';

const Form = () => {
    
    const [form,setform]=useState({});

   const userdata=()=>{
        axios({
            method:'post',
            headers:{
                "content-type":'application/json'
            },
            url:'http://localhost:3004/employeeData',
            data:{
                ...form
            }
        });
    };
   
    const handlechange=(e)=>{
        let {value,name,type,checked,files}=e.target;
        value=type==='checkbox'?checked:type==='file'?files[0].name:value;
        
        setform({
            ...form,[name]:value,
        })
    }
   

  const  onsubmithandler=(e)=>{
    e.preventDefault();
    console.log(form);
    setform({});
    userdata();
    }
    return (
        <div className='form'>
            <h1>Employee Form</h1>
            <form onSubmit={onsubmithandler}>
                <label >Name </label>
                <input type="text" name='name' onChange={handlechange}/>
                <br /><br />
                <label >Age </label>
                <input type="number" name='age' onChange={handlechange} />
                <br /><br />
                <label >Address </label>
                <input type="text" name='address' onChange={handlechange}/>
                <br /><br />
                <label >Department </label>
                <select name="department"  onChange={handlechange}>
                    <option value="">Select Department</option>
                    <option value="opeartions">Operations</option>
                    <option value="development">Development</option>
                    <option value="marketing">Marketing</option>
                </select>
                <br /><br />
                <label >Salary </label>
                <input type="number" name='salary' onChange={handlechange}/>
                <br /><br />
                <input type="checkbox" name='isMarried'  onChange={handlechange} />
                <label >isMarried </label>
                <br /><br />
                <label >Upload image: </label>
                <input type="file" name='image' accept='image/png' onChange={handlechange} />
                <br /><br />
            <input type="submit" name="submit"/>
            </form>
            
        </div>
    );
};

export default Form;