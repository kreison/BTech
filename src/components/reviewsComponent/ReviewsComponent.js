import classses from './Reviews.module.css'



function ReviewsComponent() {

    return (
        <div className={classses.block_review}>
            <br />
            <h2>Отзывы</h2>
            <div className={classses.in_block_review}>
                <h4>Хорошее качество по выгодной цене!</h4>
                <img src="./img/Baktybekova.svg" alt="" />
            </div>

            <img src="./img/plus.svg" alt="" /> <b>Плюсы </b>
            <p>
                Очень сбалансированный телефон.
                Хорошая камера и батарея, качественная сборка и яркий экран.
            </p>
            
            <img src="./img/minus.svg" alt="" /> <b>Минусы </b>
            <p>За время использования не нашла существенных минусов.</p>
            <img src="./img/review.svg" alt="" /> <b>Отзывы </b>
            <p>
                Я как-то всю дорогу предпочитаю самсунги и считаю из самыми
                классными смартфонами по соотношению качества и цены.
                Данная моя покупка это наблюдение подтверждает без всяких сомнений.
            </p>
            <hr />
            <div className={classses.in_block_review}>
                <h4>Отличная сборка и приемлемая цена</h4>
                <img src="./img/Abdyrahmanov.svg" alt="" />
            </div>
            <img src="./img/plus.svg" alt="" /> <b>Плюсы </b>
            <p>
                Очень сбалансированный телефон.
                Хорошая камера и батарея, качественная сборка и яркий экран.
            </p>
            <img src="./img/minus.svg" alt="" /> <b>Минусы </b>
            <p>За время использования не нашла существенных минусов.</p>
            <img src="./img/review.svg" alt="" /> <b>Отзывы </b>
            <p>
                Я как-то всю дорогу предпочитаю самсунги и считаю из самыми
                классными смартфонами по соотношению качества и цены.
                Данная моя покупка это наблюдение подтверждает без всяких сомнений.
            </p>
        </div>
    )
}

export default ReviewsComponent;