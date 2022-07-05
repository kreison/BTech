import React from 'react';
import cl from './partners.module.css'

import pic1 from '../../picture/hp1.png'
import pic2 from '../../picture/oneplus2.png'
import pic3 from '../../picture/mi3.png'
import pic4 from '../../picture/apple4.png'
import pic5 from '../../picture/sony5.png'
import pic6 from '../../picture/beko6.png'
import pic7 from '../../picture/hw7.png'
import pic8 from '../../picture/dell8.png'
import pic9 from '../../picture/lg9.png'
import pic10 from '../../picture/sammmm.png'
import pic11 from '../../picture/oppo10.png'
import pic12 from '../../picture/ph11.png'



const Partnery = () => {
    return (
        <div className={cl.partnerBlock}>
            <div className={cl.container}>
                <h2>Партнеры BTech</h2>
                <div className={cl.partnerBlock_inner}>
                    <div className={cl.one}>
                    <img className={cl.img} src={pic1} alt=""/>
                    <img className={cl.img} src={pic2} alt=""/>
                    <img className={cl.img} src={pic3} alt=""/>
                    <img className={cl.img} src={pic4} alt=""/>
                    <img className={cl.img} src={pic5} alt=""/>
                    <img className={cl.img} src={pic6} alt=""/>
                    </div>
                    <div className={cl.two}>
                    <img className={cl.img} src={pic7} alt=""/>
                    <img className={cl.img} src={pic8} alt=""/>
                    <img className={cl.img} src={pic9} alt=""/>
                    <img className={cl.img} src={pic10} alt=""/>
                    <img className={cl.img} src={pic11} alt=""/>
                    <img className={cl.img} src={pic12} alt=""/>
                    </div>


                </div>
            </div>
            
        </div>
    );
};

export default Partnery;