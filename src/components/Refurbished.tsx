

function Refurbished(): JSX.Element {
    return (
        <section id="refurbished" aria-label="refurbished">
            <h2>Why Buy Refurbished</h2>
            <figure className="container" aria-label="refurbished content">
                <article className="RefurbArticle">
                    <svg 
                        aria-label="dollar icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-dollar-sign">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6">
                        </path>
                    </svg>
                    <h3 className="RefurbText">Save Money</h3>
                    <p className="RefurbPara">A refurbished iphone is cheaper to buy, than new and you save money on a quality product.</p>
                </article>

                <article className="RefurbArticle">
                    <svg 
                        aria-label="globe icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-globe">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12">
                        </line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <h3 className="RefurbText">Less E-waste</h3>
                    <p className="RefurbPara">It helps reduce e-waste, by extending the life of the product, which benefits the planet.</p>
                </article>

                <article className="RefurbArticle">
                    <svg 
                        aria-label="check circle icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check-circle">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14">
                        </path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h3 className="RefurbText">Peace Of Mind</h3>
                    <p className="RefurbPara">All phones have been professionally checked, cleaned and refurbished by a third party.</p>
                </article>
            </figure>
        </section>
    );
};

export default Refurbished