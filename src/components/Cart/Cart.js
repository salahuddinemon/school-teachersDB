import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { person } = props;
    let total = 0;
    let personName = [];
    for (const teacher of person) {
        total = total + parseFloat(teacher.Salary);
        // personName = personName + teacher.name
        personName.push(teacher.name)
    }
    return (
        <div>
            <h3>Added Teacher: {props.person.length}</h3>
            <h5>Total Salary: ${total}</h5>
            <h5>Name of Added Teacher's: </h5>
            <ol>
                {personName.map((name) => (
                    <li>{name}</li>
                ))}
            </ol>
        </div>
    );
};

export default Cart;