import React, { useState } from 'react';
import classes from "./loginPage.module.css";
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
import { createUserAction, userAction } from "../../redux/actions/actions";
import { Link } from 'react-router-dom';


const LoginPage = () => {

    const dispatch = useDispatch()

    //* react-hook-form
    const { register } = useForm()


    const [passwordShow, setPasswordShow] = useState(false)

    //* change show
    const changeShow = () => passwordShow ? setPasswordShow(false) : setPasswordShow(true)

    // input
    const [user, setUser] = useState({
        email: "",
        password: "",
    })



    const changeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const createUser = () => {
        dispatch(createUserAction(user))
        localStorage.setItem('user', user.email);
    }

    return (
        <div className={ classes.login }>
            <div className={ classes.login_box }>
                <div className={ classes.container }>
                    <h1>Вход/Регистрация</h1>
                    <div className={ classes.logging_in }>
                        <h3>Введите вашу почту</h3>
                        <input
                            type="email"
                            { ...register('email') }
                            placeholder="Email"
                            name="email"
                            value={ user.email }
                            onChange={ changeInput }
                        />
                        <input
                            type={ !passwordShow ? 'password' : undefined }
                            { ...register('password') }
                            placeholder="Пaроль"
                            id="password"
                            name="password"
                            value={ user.password }
                            onChange={ changeInput }
                        />
                        <div className={ classes.show_pass } onClick={ changeShow }></div>
                        <p>Нажимая кнопку «Создать аккаунт», я даю свое согласие на <br /> обработку моих персональных данных, в соответствии с <br /> Государственным законом от 27.07.2006 года №38 «О <br /> персональных данных»</p>
                    </div>
                    {
                        user.email !== '' && user.password !== ''
                            ?
                            <Link

                                to={ '/sign/message/' + user.email }
                                type='submit'
                                onClick={ createUser }>
                                Создать аккаунт
                            </Link>
                            :
                            <Link

                                to={ '/sign'}
                                type='submit'
                                onClick={ ()=> alert('ВПИШИТЕ ЛОГИН И ПАРОЛЬ') }>
                                Создать аккаунт
                            </Link>
                    }


                </div>
            </div>
        </div>
    );
};
//
export default LoginPage;