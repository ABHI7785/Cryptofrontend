import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { employe } from "./Array";
import'./Style/Tablee.css'
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'

const Tablee = () => {
  const navigate=useNavigate()
  const [item, setItem] = useState(employe);
  const [Neww, setNeww] = useState({
    name:"",
    place:"",
    occupation:"",
    age:""
  })

  const [Flag, setFlag] = useState(false)

  const handleChange=(e)=>{
    e.preventDefault()
    setNeww((prevData)=>({
      ...prevData,[e.target.name]:e.target.value
      
    }))


  }


  const Create=()=>{
    const newdata=[...item,Neww]
    setItem(newdata)
    setNeww({
      name:"",
    place:"",
    occupation:"",
    age:""

    })


  }

  const Edititem=(data,index)=>{
    setFlag(true)
    setNeww({
      name:data.name,
      place:data.place,
      occupation:data.occupation,
      age:data.age,
      index:index

    })
    console.log(index,"abhi")

  }

  const edit=()=>{
    const newdata=[...item]
    const  indextoEdit=Neww.index
    newdata[indextoEdit]={
      name:Neww.name,
      place:Neww.place,
      occupation:Neww.occupation,
      age:Neww.age

    }

    setItem(newdata)
    
setNeww({

  name:"",
  place:"",
  occupation:"",
  age:""
})

setFlag(false)

  }

const Deleteitem=(indextoDelete)=>{
  const newarr=[...item]
 const newarray= newarr.filter((_,index)=>index!==indextoDelete)
 setItem(newarray)



 

}
  return (
    <div className="usertable">
      <h4 className="userta">OUR TRADERS</h4>
      <Table striped bordered hover className="usertab">
        <thead>
          <tr>
            <th>NAME</th>
            <th>PLACE</th>
            <th>OCCUPATION</th>
            <th>AGE</th>
            <th colSpan={2}>CONTROLS</th>
          </tr>
        </thead>
        <tbody>
          {item.map((arr,index) => {
            return (
              <>
                <tr>
                  <td>{arr.name}</td>
                  <td>{arr.place}</td>
                  <td>{arr.occupation}</td>
                  <td>{arr.age}</td>
                  <td onClick={()=>Edititem(arr,index)}><FiEdit/></td>
                  <td onClick={()=>Deleteitem(index)}><AiOutlineDelete/></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <div className="inputtt">
        <h6>Please fill your credentials</h6>
        <input type="text" name="name"  value={Neww.name} onChange={handleChange} placeholder="Name"></input>
        <input type="text" name="place"  value={Neww.place} onChange={handleChange}  placeholder="Place"></input>
        <input type="text" name="occupation"  value={Neww.occupation} onChange={handleChange} placeholder="Occupation"></input>
        <input type="text" name="age"  value={Neww.age} onChange={handleChange}  placeholder="Age"></input>
      </div>

      <div className="butt">
      <button className="ctap" onClick={Flag? edit:Create}>{Flag?'edit':'Create'}</button><br/>
      <button onClick={()=>{navigate("/*")}} className="back">Back to Home</button>
  
      </div>
     
    </div>
  );
};

export default Tablee;
