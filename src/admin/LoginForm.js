import React, { useState } from 'react';
import "../../src/admin/Admin.css"

const LoginForm = ({ login, isAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'soshdmitrievka@gmail.com' && password === 'Aspek1962') {
            login();
        } else {
            alert('Неправильный электронный адрес или пароль');
        }
    };

    return (
        <div className="container" style={{ width:"100%" , height:"150%"}}>
            <center>
                <div className="admin">
                    <h1>Рады приветствовать вас на нашем сайте электронного звонка  от команды </h1>
                    <center>
                        <h2 style={{

                        }} className='mr'>MRSUN!</h2>
                    </center>
                    <div className="part">
                        <form  onSubmit={handleSubmit}>

                            <input
                                MRSUN
                                type="email"
                                placeholder="Электронный адрес"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />


                            <input
                                type="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button type="submit">Войти</button>
                        </form>
                    </div>
                </div>

            </center>

        </div>
    );
};

export default LoginForm;
