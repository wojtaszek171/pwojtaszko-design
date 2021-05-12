import React, { FC, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import './Login.scss';

interface LoginProps {
    message?: string;
    onLogin: (login: string, password: string) => void;
}

const Login: FC<LoginProps> = ({ message, onLogin }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginChange = (value: string) => {
        setLogin(value)
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value)
    };

    return (
        <div className="pwd-login-component">
            <div className="pwd-login-form">
                <Input
                    label='username'
                    value={login}
                    autocomplete='off'
                    onChange={handleLoginChange}
                />
                <Input
                    label='password'
                    placeholder='******'
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Button
                    text='login'
                    handleClick={() => onLogin(login, password)}
                />
                {message && (
                    <span className="pwd-login-error">
                        {message}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Login;
