import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import Cart from '../Cart/Cart'
import './Teachers.css';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    const [person, setPerson] = useState([]);

    useEffect(() => {
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    const handleAddToCart = teacher => {
        const newPerson = [...person, teacher];
        setPerson(newPerson);
    };

    return (
        <div className='teachers-container'>
            <div className='teacher-container'>
                {
                    teachers.map(teacher => <Teacher
                        key={teacher.key}
                        teacher={teacher}
                        handleAddToCart={handleAddToCart}
                    >
                    </Teacher>)
                }
            </div>
            <div className='total-container'>
                <Cart person={person}></Cart>
            </div>

        </div>
    );
};

export default Teachers;