import React from 'react'

const TableContacts = ({ contacts = [], dispatch}) => {

    const handleDelete = (id) => {
        const deleteAction = {
            type: 'delete',
            payload: id
        };

        dispatch(deleteAction)
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {
                    contacts.map((contact) => {

                        const finalId = contact.id.split('-')

                        return <tr key = {contact.id}>
                            <th>{finalId[1]}</th>
                            <td>{contact.name}</td>
                            <td>{contact.number}</td>
                            <td>
                                <button 
                                onClick = {() => handleDelete(contact.id)}
                                className = 'btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default TableContacts
