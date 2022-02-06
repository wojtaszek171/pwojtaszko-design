import React, { FC, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import './Register.scss';

interface RegisterProps {
    message?: string;
    onRegister: (name: string, surname: string, username: string, password: string, passwordRe: string) => void;
}

const Register: FC<RegisterProps> = ({ message, onRegister }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRe, setPasswordRe] = useState('');
    
    const handleRegister = () => {
        onRegister(name, surname, username, password, passwordRe)
    };

    return (
        <div className="pwd-register-component">
            <div className="pwd-register-form">
                <Input
                    label='Name'
                    value={name}
                    autocomplete='off'
                    onChange={setName}
                />
                <Input
                    label='Surname'
                    value={surname}
                    autocomplete='off'
                    onChange={setSurname}
                />
                <Input
                    label='Username'
                    value={username}
                    autocomplete='off'
                    onChange={setUsername}
                />
                <Input
                    label='Password'
                    placeholder='******'
                    type='password'
                    value={password}
                    onChange={setPassword}
                />
                <Input
                    label='Repeat password'
                    placeholder='******'
                    type='password'
                    value={passwordRe}
                    onChange={setPasswordRe}
                />
                <Button
                    text='Register'
                    onClick={handleRegister}
                />
                {message && (
                    <span className="pwd-register-error">
                        {message}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Register;
