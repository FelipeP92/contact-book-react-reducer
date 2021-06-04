import React, { useEffect, useReducer,useState } from 'react'
import { ContactReducer } from '../reducers/ContactReducer'
import FormAdd from './FormAdd'
import TableContacts from './TableContacts'


const init = () => {
    const contacts = localStorage.getItem('contacts');

    return contacts ? JSON.parse(contacts) : [];
}

const Contacts = () => {


    const [state, dispatch] = useReducer(ContactReducer, [], init);

    useEffect(() => {
       localStorage.setItem('contacts', JSON.stringify(state))
    },[state]);

    const [formView, setFormView] = useState(false)



    return (
        <div className='container mt-3'>
            <button 
            onClick = {() => setFormView(!formView)}
             className = 'btn btn-success'
             >
                {formView ? ' - Close Book' : ' + Add Contact'}
            </button>
            {
              formView && <FormAdd dispatch ={ dispatch } />
            
            }
            
            <TableContacts contacts={state} dispatch = {dispatch} />

        </div>
    )
}

export default Contacts
