import React,{useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';


const StdView = () =>{
    let { id } = useParams();
        const [courseData, setCourseData] = useState([]);

        useEffect(() => {
            fetch(`http://127.0.0.1:8000/api/studentapis/listdetails/${id}/`)
            .then(respose => respose.json())
            .then(data => setCourseData(data))
        }, )

    return(
        <React.Fragment>
            <div className="App">
                <div className="App-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h1 className="text-dark">{courseData.name}</h1>
                                        <h2 className="text-dark">{courseData.roll}</h2>
                                        <h3 className="text-dark">{courseData.school}</h3>
                                        <h4 className="text-dark">{courseData.address}</h4>
                                        <h5 className="text-dark">{courseData.maths}</h5>
                                        <h6 className="text-dark">{courseData.sci}</h6>
                                        <h7 className="text-dark">{courseData.eng}</h7>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default StdView