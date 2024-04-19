const TvFooter = (props) => {
    console.log(props, "propsfooter")
    return (
        <div className="product-footer">
            <div id="about-footer" className="product-footer__container">
                <h2 className="product-footer__title typ-headline-emph"> About </h2>
                <div className="product-footer__info">

                    <div className="review-card tertiary-bg-color">
                        <div className="review-card__title typ-headline-emph">
                            <span>{props.data.name}</span>
                            <span className="review-card__title--sub typ-footnote clr-secondary-text">
                                <ul className="review-card__title--sub--list">
                                    {props.data.genres.map((item)=>{
                                        return <li> {item.name}</li>
                                    }) }
                                </ul>
                            </span>
                        </div>
                        <div className="line-clamp-wrapper">
                            <div className="line-clamp  product-footer__description typ-subhead clr-secondary-text">
                                {props.data.overview}
                            </div>
                        </div>
                    </div>


                </div>
                <div className="product-footer__metadata">

                    <section className="product-footer__metadata__section">
                        <h3 className="product-footer__metadata__section__title typ-headline-emph">
                            Information
                        </h3>
                        <dl>
                            <dt className="typ-caption"> Released</dt>
                            <dd className="product-footer__metadata__section__desc typ-caption clr-secondary-text"> {props.data.first_air_date.substring(0,4)} </dd>
                            <dt className="typ-caption"> Region of Origin</dt>
                            <dd className="product-footer__metadata__section__desc typ-caption clr-secondary-text"> {props.data.origin_country[0]} </dd>
                        </dl>
                    </section>
                </div>
            </div>
        </div>
    )

}

export default TvFooter