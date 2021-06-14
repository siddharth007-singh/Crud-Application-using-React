import React,{useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';


const StdView = () =>{
    let { id } = useParams();
        const [courseData, setCourseData] = useState([]);

        useEffect(() => {
            fetch(`http://127.0.0.1:8000/api/studentapis/listdetails/${id}`)
            .then(respose => respose.json())
            .then(data => setCourseData(data))
        }, )

    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-9">
                        <p className="lead">{courseData.description}</p></div>

                    <div className="col-lg-3">
                            <div className="card">
                                <img src="" alt="" />
                                <div className="card-body">
                                    <h5>{courseData.name}</h5>
                                    <h5>{courseData.roll}</h5>
                                    <h5>{courseData.school}</h5>
                                    <h5>{courseData.address}</h5>
                                    <h5>{courseData.maths}</h5>
                                    <h5>{courseData.sci}</h5>
                                    <h5>{courseData.rng}</h5>
                                </div>
                            </div>
                    </div>
                </div>
            </div> 
        </React.Fragment>
    )
}
export default StdView