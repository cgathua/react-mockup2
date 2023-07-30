import { LapTimerIcon } from "@radix-ui/react-icons"


function Home(): JSX.Element {
    return (
        <section id="home" className="hero">
            <div className="container">
                <article className="info">
                    <div className="delivery">
                        <small>Free shipping</small>
                        <LapTimerIcon className="LapTimerIcon" />
                    </div>
                    <h1>Refurbished Phones</h1>
                    <p>The online store for refurbished iphones, 90 day warranty included.</p>
                    <button className="btn">
                        <a href="#phones">See Products</a>
                    </button>
                </article>
                <aside>
                    <img
                        src="pexels-jess-bailey.png"
                        srcSet="pexels-jess-bailey600w.avif 640w, pexels-jess-bailey.png 960w"
                        sizes="(max-width: 600px) 640w, 960w"
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