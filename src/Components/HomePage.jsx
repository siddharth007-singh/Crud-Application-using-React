import React, {useState, useEffect} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const HomePage = ()=>{
    const[data, setdata] = useState([]);
    const[name, setName] = useState("");
    const[roll, SetRoll] = useState("");
    const[school, setSchool] = useState("");
    const[address, setAddress] = useState("");
    const[maths, setMath] = useState("");
    const[sci,setSci ] = useState("");
    const[eng,setEng ] = useState("");

  useEffect(() =>{
      fetch("http://127.0.0.1:8000/api/studentapis/")
      .then(respose => respose.json())
      .then(res => setdata(res))
  });

  const submitBtn =()=>{
    return fetch("http://127.0.0.1:8000/api/studentapis/create/",{
      method:"POST",
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({name:name, roll:roll, school:school, address:address, maths:maths, sci:sci, eng:eng})
    }).then(data=>data.json())
  };
  
  const delBtn = ()=>{
    return fetch("http://127.0.0.1:8000/api/studentapis/delete/${id}",{
      method:"DELETE"
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                  <div className="card-text text-dark">
                    <label>Name of Student</label>
                    <input type="text" className="form-control" name="name" onChange={(e)=>setName(e.target.value)}/>
                    <label>Student Roll Number</label>
                    <input type="text" className="form-control" name="roll" onChange={(e)=>SetRoll(e.target.value)}/>
                    <label>Name of School</label>
                    <input type="text" className="form-control" name="school" onChange={(e)=>setSchool(e.target.value)}/>
                    <label>Address of School</label>
                    <input type="text" className="form-control" name="school" onChange={(e)=>setAddress(e.target.value)}/>
                    <label>Mathematics</label>
                    <input type="text" className="form-control" name="school" onChange={(e)=>setMath(e.target.value)}/>
                    <label>Science</label>
                    <input type="text" className="form-control" name="school" onChange={(e)=>setSci(e.target.value)}/>
                    <label>English</label>
                    <input type="text" className="form-control" name="school" onChange={(e)=>setEng(e.target.value)}/>

                    <button className="btn btn-block btn-danger btn-sm mt-3" onClick={submitBtn}>Submit</button>
                  </div>
                  </div>
                </div>
            </div>
            <div className="col-lg-8">
              <table className="table table-hover table-stripped text-white">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Roll</th>
                  <th>School</th>
                  <th>Action</th>
                </tr>
                {data.map((value,key)=>(
                  <tr>  
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.roll}</td>
                    <td>{value.school}</td>
                    <td>
                      <ButtonGroup aria-label="Basic example">
                        <a href={`/delete/${value.id}`} className="btn btn-danger" onClick={delBtn}>Delete</a>
                        <Link to={{pathname: `/View/${value.id}`}} className="btn btn-info">view</Link>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </header> 
    </div>
  );
}

export default HomePage