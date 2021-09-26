import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Teacher.css';

const Teacher = (props) => {
    // console.log(props);
    const { img, name, Salary, area, position, schoolName, gender } = props.teacher;
    return (
        <div className='card-container'>
            <div className="w row row-cols-1 row-cols-md-3 g-4">
                <div className="col w-100">
                    <div className="card h-100">
                        <img src={img} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h4 className="card-title">Name: {name}</h4>
                            <h5>Position: {position}</h5>
                            <h6>Gender: {gender}</h6>
                            <h6>School Name: {schoolName}</h6>
                            <h6>Address: {area}</h6>
                            <h6>Salary: ${Salary}</h6>
                            <hr />
                            <div class="col-6 mx-auto">
                                <button
                                    onClick={() => props.handleAddToCart(props.teacher)}
                                    class="btn btn-style" type="button"><FontAwesomeIcon icon={faUserPlus} /> Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacher;