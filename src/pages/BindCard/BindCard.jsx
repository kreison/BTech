import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import cl from './BindCard.module.css'
import visa from '../../picture/oplata/visa.svg'
import { Navigate, useNavigate } from 'react-router-dom';

const BindCard = () => {
    const [input, setInput] = useState({
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: ''
    });
    const nav = useNavigate()


    const changeInput = (e) => {
        if (/\d/.test(e.target.value)) {
            setInput({ ...input, [e.target.name]: e.target.value })
        }
    }
    
    const click = ()=>{
        localStorage.setItem('binded', true);
        nav('/delivery')

    }

    return (
        <div className='container'>
            <h2 style={{textAlign: 'left'}}>Привязка карты</h2>
            <div className={ cl.inner }>
                <form className={ cl.form }>
                    <img src={ visa } alt="visa" />

                    <div className={ cl.group }>
                        <input placeholder='****' name='one' onChange={ changeInput } value={ input.one } type="text" maxLength={ 4 } />
                        <input placeholder='****' name='two' onChange={ changeInput } value={ input.two } type="text" maxLength={ 4 } />
                        <input placeholder='****' name='three' onChange={ changeInput } value={ input.three } type="text" maxLength={ 4 } />
                        <input placeholder='****' name='four' onChange={ changeInput } value={ input.four } type="text" maxLength={ 4 } />
                    </div>
                    <div className={ cl.group2 }>
                        <input placeholder='**' name='five' onChange={ changeInput } value={ input.five } type="text" maxLength={ 2 } />
                        <p>/</p>
                        <input placeholder='**' name='six' onChange={ changeInput } value={ input.six } type="text" maxLength={ 2 } />
                    </div>
                </form>
                <form className={`  ${cl.form2}` }>
                    <div className={cl.black}></div>
                    <div className={ `${cl.group2} ${cl.group3}` }>
                        <input placeholder='***' name='seven' onChange={ changeInput } value={ input.seven } type="text" maxLength={ 3 } />
                    </div>
                </form>
                
            </div>
            <p onClick={click} style={{display: 'inline'}} className='button'>Привязать</p>
            
        </div>
    );
};

export default BindCard;