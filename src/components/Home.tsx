import { LapTimerIcon } from "@radix-ui/react-icons";
import DefaultImage from '/pexels-jess-bailey.png';
import MediumImage from '/pexels-jess-bailey640w.webp';
import LargeImage from '/pexels-jess-bailey768w.webp';


function Home(): JSX.Element {
    return (
        <section id="home" className="hero">
            <div className="container">
                <article className="info">
                    <div className="delivery">
                        <small>Free shipping</small>
                        <LapTimerIcon className="LapTimerIcon" aria-label="Lap Timer Icon" />
                    </div>
                    <h1>Refurbished Phones</h1>
                    <p>The online store for refurbished iphones, that include a 90 day warranty.
                        All phones are also repaired according to manufacturer specification.
                    </p>
                    <button className="btn">
                        <a href="#phones">See Products</a>
                    </button>
                </article>
                <aside>
                    <img
                        src={DefaultImage}
                        srcSet={`${MediumImage} 480w, ${LargeImage} 640w, ${DefaultImage} 960w`}
                        alt="iphone X"
                        width={960}
                        height={720}
                        className="HomeImage"
                    />
                </aside>
            </div>
        </section>
    );
};

export default Home