import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


import {Container} from './styles';

import api from '../../service/api' 

import { IUser } from '../../store/modules/user/types';
import { addNewUser } from '../../store/modules/user/actions';

const Home: React.FC = () => {
    const dispatch = useDispatch()
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        api.get('students').then(
            response => {
                setUsers(response.data)
            }
        )
    }, [])

    const handleUsers = useCallback( ( user: IUser  ) => {
        dispatch((addNewUser(user)))
    }, [dispatch]) 

    return (
        <div>
            <Container>
                { users.map( user => (
                    <div key={user.id}>
                        <ul className="bloco">
                            <li><b>Nome:</b>  { user.name }</li>                           
                            <li><b>Email:</b> { user.email }</li>                        
                            <li><b>Idade:</b> { user.age }</li>
                            <button onClick={ () => handleUsers(user) }> Matricular </button> 
                        </ul>
                    </div>
                ))}
                
            </Container>
        </div>
    );
}

export default Home;