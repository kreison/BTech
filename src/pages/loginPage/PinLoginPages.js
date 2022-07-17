import React, { useState } from 'react';
import classes from "./loginPage.module.css";
import {StatefulPinInput} from "react-input-pin-code";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const PinLoginPage = () => {
    
    return (
        <div className={classes.login}>
            <div className={classes.login_box}>
                <div className={classes.container}>
                    <h1>Вход/Регистрация</h1>
                    <div>
                        <h3 className={classes.fontPin}>Код подтверждения отправлен на номер <br/>

                        </h3>
                        <div className={classes.pincode}>

                            {/*  react-input-pin-code  */}
                            <StatefulPinInput inputStyle={{
                                width: "58px",
                                height: "48px",
                                border: "0",
                                background: "#EDEDF0",
                                margin: "0",
                                padding: "0",
                                font: '18px "Roboto"',
                                fontWeight: "600"
                            }}  containerClassName={classes.pin} placeholder="" length={5}/>
                        </div>

                        <a href="">Получить новый код</a>
                    </div>
                    <button>Подтвердить</button>
                </div>
            </div>
        </div>
    );
};

export default PinLoginPage;