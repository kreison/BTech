import classes from './Registration.module.css'

function RegistrationPage(props) {


    // const postDataFunc = (data) => {
    //     const data = {
    //         email: email,
    //         password: password
    //     }
    //     const options = {
    //         method: "POST",
    //         Headers: {
    //             "Content-type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     }
    // }
    return (
        <div className={classes.container}>
            <div className={classes.container_inner}>
                <h2>Вход / Регистрация</h2>
                <p>Введите вашу почту</p>
                <input type="email" placeholder='Email'  />
                <input onClick={(e) => e.target.type = 'text'} type="password" placeholder='Пароль'  />
                <p className={classes.desc}>Нажимая кнопку «Создать аккаунт», я даю свое согласие на обработку моих персональных данных, в соответствии с Государственным законом от 27.07.2006 года №38 «О персональных данных»</p>
                <button>Создать аккаунт»</button>
            </div>
        </div>
    );
}

export default RegistrationPage;