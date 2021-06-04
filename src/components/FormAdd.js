import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const FormAdd = ({ dispatch }) => {

    const [data, setData] = useState({ name: '', number: '' });

    const { name, number } = data;

    const actionAdd = {
        type: 'add',
        payload: {
            id: uuid(),
            name,
            number
        }
    };

    const handleAdd = () => {
        dispatch(actionAdd)
    };

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });

    };


    return (
        <>

            <div className='container'>
                <label className='mx-1 d-grid gap-2'>
                    Name: {' '}
                    <input
                        type="text"
                        className='form-control'
                        autoComplete='off'
                        name='name'
                        onChange={handleChange}
                    />
                </label>

                <label className='mx-1 d-grid gap-2'>
                    Number: {' '}
                    <input
                        type="text"
                        className='form-control'
                        autoComplete='off'
                        name='number'
                        onChange={handleChange}
                    />
                </label>
                <div className='mx-1 d-grid gap-2'>
                    <button onClick={handleAdd} className='btn btn-success mt-3'>Add Contact</button>
                </div>

            </div>
        </>
    )
}

export default FormAdd
