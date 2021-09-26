import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './Teachers.css';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    return (
        <div className='teachers-container'>
            <div className='teacher-container'>
                {
                    teachers.map(teacher => <Teacher
                        key={teacher.key}
                        teacher={teacher}
                    >
                    </Teacher>)
                }
            </div>
            <div className='total-container'>
                <h2>Tachers Total Summary</h2>
            </div>

        </div>
    );
};

export default Teachers;