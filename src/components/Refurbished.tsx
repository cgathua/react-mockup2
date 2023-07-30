

function Refurbished(): JSX.Element {
    return (
        <section id="refurbished">
            <h2>Why Buy Refurbished</h2>
            <div className="container">
                <article className="RefurbArticle">
                    <svg xmlns="http://www.w3.org/2000/svg"
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
                    <p className="RefurbPara">A refurbished phone is cheaper to buy, than new.</p>
                </article>

                <article className="RefurbArticle">
                    <svg xmlns="http://www.w3.org/2000/svg"
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
                    <p className="RefurbPara">It helps reduce e-waste, which benefits the planet.</p>
                </article>

                <article className="RefurbArticle">
                    <svg xmlns="http://www.w3.org/2000/svg"
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
                    <p className="RefurbPara">It's been professionally checked and repaired.</p>
                </article>
            </div>
        </section>
    );
};

export default Refurbished