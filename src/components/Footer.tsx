import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { HomeIcon } from "@radix-ui/react-icons";

function Footer(): JSX.Element {
    return (
        <footer>
            <section id="footer-socials" aria-label="social media">
                <ul className="footer-icons">
                    <li><a href="#" aria-label="discord"><DiscordLogoIcon /></a></li>
                    <li><a href="#" aria-label="twitter"><TwitterLogoIcon /></a></li>
                    <li><a href="#" aria-label="instagram"><InstagramLogoIcon /></a></li>
                    <li><a href="#" aria-label="linkedin"><LinkedInLogoIcon /></a></li>
                    <li><a href="#home" aria-label="home"><HomeIcon /></a></li>
                </ul>
            </section>

            <section id="footer-legal" aria-label="legal">
                <small>
                    <ul className="footer-legal-items">
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li>Made by <a href="https://cgathua.pages.dev/" target="_blank">@cgathua</a></li>
                    </ul>
                </small>
            </section>
        </footer>
    );
};

export default Footer