import classes from './Reviews.module.css'


function ReviewsComponent() {

    return (
        <div className={classes.block_review}>
            <br />
            <h2>Отзывы</h2>
            <div className={classes.in_block_review}>
                <h3>Хорошее качество по выгодной цене!</h3>
                <img src="./img/Baktybekova.svg" alt="" />
            </div>
            <div className={classes.flex}>
                <img src="./img/plus.svg" alt="" /> <b>Плюсы </b>
            </div>
            <p>
                Очень сбалансированный телефон.
                Хорошая камера и батарея, качественная сборка и яркий экран.
            </p>
            <div className={classes.div}>
                <div className={classes.flex}>
                    <img src="./img/minus.svg" alt="" /> <b>Минусы </b>
                </div>
                <p>За время использования не нашла существенных минусов.</p>
            </div>
            <div className={classes.flex}>
                <img src="./img/review.svg" alt="" /> <b>Отзывы </b>
            </div>
            <p>
                Я как-то всю дорогу предпочитаю самсунги и считаю из самыми
                классными смартфонами по соотношению качества и цены.
                Данная моя покупка это наблюдение подтверждает без всяких сомнений.
            </p>
            <hr />
            <div className={classes.in_block_review}>
                <h3>Отличная сборка и приемлемая цена</h3>
                <img src="./img/Abdyrahmanov.svg" alt="" />
            </div>
            <div className={classes.flex}>
                <img src="./img/plus.svg" alt="" /> <b>Плюсы </b>
            </div>
            <p>
                Очень сбалансированный телефон.
                Хорошая камера и батарея, качественная сборка и яркий экран.
            </p>
            <div className={classes.div}>
                <div className={classes.flex}>
                    <img src="./img/minus.svg" alt="" /> <b>Минусы </b>
                </div>

                <p>За время использования не нашла существенных минусов.</p>
            </div>

            <div className={classes.flex}>
                <img src="./img/review.svg" alt="" /> <b>Отзывы </b>
            </div>
            <p>
                Я как-то всю дорогу предпочитаю самсунги и считаю из самыми
                классными смартфонами по соотношению качества и цены.
                Данная моя покупка это наблюдение подтверждает без всяких сомнений.
            </p>
        </div>
    )
}

export default ReviewsComponent;