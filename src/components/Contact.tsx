
function Contact(): JSX.Element {
    return (
        <section id="contact" aria-label="contact">
            <h2>Contact</h2>
            <figure className="container" aria-label="contact content">
                <form action="contact-form" method="post" className="form">
                    <fieldset>
                        <legend>
                            <label id="name"> First Name <input type="text" name="First Name" placeholder="First Name" aria-label="official name" required /></label>
                            <label id="legal name"> Last Name <input type="text" name="Last Name" placeholder="Last Name" aria-label="legal name" required /></label>
                            <label id="email"> Email <input type="email" name="Email Address" placeholder="Enter Your Email" aria-labelledby="email" required /></label>
                        </legend>
                    </fieldset>
                    <fieldset>
                        <legend>
                            <label id="message"> Message
                                <textarea id="comments" rows={7} placeholder="Message....." aria-labelledby="comments" autoComplete="off"></textarea>
                            </label>
                        </legend>
                    </fieldset>
                    <input type="submit" id="submit" value="Submit" />
                </form>

                <address className="contact">
                    <h3>Contact Info</h3>
                    <p>Please feel free to reach out to us, for any queries.</p>
                    <ul className="contact_details">
                        <li>
                            <svg
                                aria-label="phone icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0F0F0F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <h4>(404)-105-1705</h4>
                        </li>
                        <li>
                            <svg 
                                aria-label="mail icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0F0F0F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-mail">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <h4>support@logo.com</h4>
                        </li>
                        <li>
                            <svg
                                aria-label="location icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0F0F0F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-map-pin">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <h4>Atlanta, Georgia</h4>
                        </li>
                    </ul>
                </address>
            </figure>
        </section>
    );
};

export default Contact