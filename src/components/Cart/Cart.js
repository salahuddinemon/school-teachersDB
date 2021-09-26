import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { person } = props;
    let total = 0;
    let personName = [];
    for (const teacher of person) {
        total = total + parseFloat(teacher.Salary)
        personName = personName + teacher.name
    }
    return (
        <div>
            <h3>Added Teacher: {props.person.length}</h3>
            <h5>Total Salary: ${total}</h5>
            <h5 className='display-selectName'>Name Of Added Teacher's:{personName} </h5>
        </div>
    );
};

export default Cart;