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

    return (
        <div className="pwd-login-component">
            <div className="pwd-login-form">
                <Input
                    label='Username'
                    value={login}
                    autocomplete='off'
                    onChange={setLogin}
                />
                <Input
                    label='Password'
                    placeholder='******'
                    type='password'
                    value={password}
                    onChange={setPassword}
                />
                <Button
                    text='Login'
                    onClick={() => onLogin(login, password)}
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
