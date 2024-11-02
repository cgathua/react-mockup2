
import { LapTimer } from "../assets/LapTimer";
import DefaultImage from '/pexels-jess-bailey.webp';
import MediumImage from '/pexels-jess-bailey640w.webp';
import LargeImage from '/pexels-jess-bailey768w.webp';


function Home(): JSX.Element {
    return (
        <section id="home" className="hero" aria-label="home">
            <figure className="container" aria-label="home content">
                <article className="info">
                    <span className="delivery">
                        <small>Free shipping</small>
                        <LapTimer aria-label="Lap Timer Icon"/>
                    </span>
                    <h1>Refurbished Phones</h1>
                    <p>The online store for refurbished iphones, that include a 90 day warranty.
                        All phones are also repaired according to manufacturer specification.
                    </p>
                    <p>We also accept non-working phones, for recycling and you can also trade-in your old working phone.</p>
                    <button className="btn">
                        <a href="#phones" aria-label="see products">See Products</a>
                    </button>
                </article>
                <aside>
                    <img
                        src={DefaultImage}
                        srcSet={`${MediumImage} 640w, ${LargeImage} 768w, ${DefaultImage} 960w`}
                        alt="iphone X"
                        width={960}
                        height={720}
                        className="HomeImage"
                    />
                </aside>
            </figure>
        </section>
    );
};

export default Home