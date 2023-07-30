import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

type ULList = {
    id: number,
    link: string,
    title: string,
}[];

const NavigationMenuDesktop = () => {

    let ulLists: ULList = [
        { id: 0, link: '#home', title: 'Home' },
        { id: 1, link: '#phones', title: 'Phones' },
        { id: 2, link: '#refurbished', title: 'Why Buy Refurbished?' },
        { id: 3, link: '#faq', title: 'FAQs' },
        { id: 4, link: '#contact', title: 'Contact' }
    ]
    return (
        <header>
            <a href='#' className='logo'>Logo</a>
            <NavigationMenu.Root className='NavigationMenuRoot' value='string'>
                <NavigationMenu.List className='NavigationMenuList'>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="NavigationMenuLink" href="#home">
                            Home
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="NavigationMenuLink" href="#phones">
                            Phones
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="NavigationMenuLink" href="#refurbished">
                            Why Buy Refurbished?
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="NavigationMenuLink" href="#faq">
                            FAQs
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="NavigationMenuLink" href="#contact">
                            Contact
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/cgathua?tab=repositories" target='blank'>
                            Github
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
            <ul className={`NavBar2`}>
                {ulLists.map(elem => <li key={elem.id}><a aria-label="mobile nav" href={elem.link}>{elem.title}</a></li>)}
            </ul>
            <button className="MenuBtn" aria-label="menu" aria-haspopup="true" aria-expanded="false"><HamburgerMenuIcon className="IconButton" /></button>
        </header>
    );
};

export default NavigationMenuDesktop;