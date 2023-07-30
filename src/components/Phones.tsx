import FirstImgAvif from '/pexels-thiago-japyassu-1069798.avif';
import FirstImg from '/pexels-thiago-japyassu-1069798.jpg';
import SecondImgAvif from '/pexels-brett-jordan-2643698.avif';
import SecondImg from '/pexels-brett-jordan-2643698.jpg';
import ThirdImgAvif from '/pexels-efrem-efre-15944460.avif';
import ThirdImg from '/pexels-efrem-efre-15944460.jpg';
import FourthImgAvif from '/pexels-tyler-lastovich-719399.avif';
import FourthImg from '/pexels-tyler-lastovich-719399.jpg';
import FifthImgAvif from '/pexels-pixabay-270686.avif';
import FifthImg from '/pexels-pixabay-270686.jpg';
import SixthImgAvif from '/pexels-tuur-tisseghem-818043.avif';
import SixthImg from '/pexels-tuur-tisseghem-818043.jpg'


function Phones() {
    return (
        <section id="phones" className='ProductsSection'>
            <h2>Phones</h2>
            <div className="container">
                <article className="ProductsColumn">
                    <picture>
                        <source srcSet={FirstImgAvif} type="image/avif" />
                        <img src={FirstImg} width={640} height={427} alt="iphone x" loading='lazy' />
                    </picture>
                    <h3>iphone X</h3>
                    <button className="btn BtnPrimary">$699</button>
                </article>

                <article className="ProductsColumn">
                    <picture>
                        <source srcSet={SecondImgAvif} type="image/avif" />
                        <img src={SecondImg} width={640} height={427} alt="iphone 6" loading='lazy' />
                    </picture>
                    <h3>iphone 6</h3>
                    <button className="btn BtnPrimary">$299</button>
                </article>

                <article className="ProductsColumn">
                    <picture>
                        <source srcSet={ThirdImgAvif} type="image/avif" />
                        <img src={ThirdImg} width={640} height={427} alt="iphone se" loading='lazy' />
                    </picture>
                    <h3>iphone SE</h3>
                    <button className="btn BtnPrimary">$199</button>
                </article>

                <article className="ProductsColumn">
                    <picture>
                        <source srcSet={FourthImgAvif} type="image/avif" />
                        <img src={FourthImg} width={640} height={427} alt="iphone xr" loading='lazy' />
                    </picture>
                    <h3>iphone XR</h3>
                    <button className="btn BtnPrimary">$499</button>
                </article>

                <article className="ProductsColumn">
                    <picture>
                        <source srcSet={FifthImgAvif} type="image/avif" />
                        <img src={FifthImg} width={640} height={427} alt="iphone 5s" loading='lazy'/>
                    </picture>
                    <h3>iphone 5S</h3>
                    <button className="btn BtnPrimary">$199</button>
                </article>

                <article className="ProductsColumn">
                    <picture>
                        <source srcSet={SixthImgAvif} type="image/avif" />
                        <img src={SixthImg} width={640} height={427} alt="iphone 7" loading='lazy' />
                    </picture>
                    <h3>iphone 7</h3>
                    <button className="btn BtnPrimary">$299</button>
                </article>
            </div>
        </section>
    );
};

export default Phones