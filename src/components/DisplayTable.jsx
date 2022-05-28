import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayTable = () => {
   const [data,setData]=useState([]);
   const[page,setpage]=useState(1);
   const[totalcount,setcount]=useState(0);
    useEffect(()=>{
        axios.get(`http://localhost:3004/employeeData?_page=${page}&_limit=5`).then(({data,headers})=>{
            setData(data)
            setcount(Number(headers['x-total-count']));
       })
    },[page])
    return (
        <div>
            <button disabled={page<=1} onClick={()=>(setpage(page-1))}>{`<`}</button><button disabled={totalcount<=page*5} onClick={()=>(setpage(page+1))}>{`>`}</button>
            <table style={{border:'1px solid black'}}>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Department</th>
                    <th>is Married</th>
                    </tr>
                </thead>
                  
                <tbody>
                    {data.map(({image,name,address,age,salary,department,isMarried,id})=>(
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{image}</td>
                            <td>{name}</td>
                            <td>{address}</td>
                            <td>{age}</td>
                            <td>{salary}</td>
                            <td>{department}</td>
                            <td>{`${isMarried}`}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
};

export default DisplayTable;