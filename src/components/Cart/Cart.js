// Import essextial file
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

//right side Cart that changes information by clicking button
const Cart = (props) => {
    const { person } = props;
    let total = 0;
    let personName = [];
    for (const teacher of person) {
        total = total + parseFloat(teacher.Salary);
        personName.push(teacher.name)
    }
    return (
        <div className="cart-container">
            <div className="cart-total">
                <ul className="list-group list-group-flush mx-auto">
                    <h4 className="list-group-item">Managed Total</h4>
                    <div className="ms-3">
                        <h6>Added Total Teacher: {props.person.length}</h6>
                        <h6>Total Total Salary: ${total}</h6>
                    </div>
                </ul>
            </div>
            <div className="selected-name">
                <ul className="list-group list-group-flush">
                    <h4 className="list-group-item bolder"><FontAwesomeIcon icon={faUser} /> Selected Teacher's</h4>
                    <ol>
                        {personName.map((name) => (
                            <li key={person.key}>{name}</li>
                        ))}
                    </ol>
                </ul>
            </div>
        </div>
    );
};

export default Cart;