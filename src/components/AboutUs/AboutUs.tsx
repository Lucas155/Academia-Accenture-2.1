import React from 'react';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../store/modules/user/types';
import { Container } from './styles';

const AboutUs: React.FC = () => {
    const state = useSelector((state: IGlobalState) => state.users)

    return (
        <Container>
            <h1>Matriculados, Academia Accenture 2.1</h1>
            <>
            { state.map( (user, index) => (
                    <div className="matriculados" key={index}>
                        <ul>
                            <li>{user.name}</li>
                        </ul>
                    </div>

                ))}
            </>
        </Container>
    );
}

export default AboutUs;