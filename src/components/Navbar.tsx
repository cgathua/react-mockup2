import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

type ULList = {
    id: number,
    link: string,
    title: string,
}[];

const NavigationMenuDesktop = () => {

    let ulLists: ULList = [
        { id: 0, link: '#home', title: 'Home'},
        { id: 1, link: '#services', title: 'Services'},
        { id: 2, link: '#faqs', title: 'FAQ'},
        { id: 3, link: '#reviews', title: 'Reviews'},
        { id: 4, link: '#contact', title: 'Contact'}
    ]
    return (
        <header>
            <nav>
            <a href='/' className='logo'>Logo</a>
        <NavigationMenu.Root className='NavigationMenuRoot' value='string'>
            <NavigationMenu.List className='NavigationMenuList'>
                <NavigationMenu.Item>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                    Home
                </NavigationMenu.Trigger>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="#">
                        Services
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="#">
                        FAQ
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="#">
                        Reviews
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="#">
                        Contact
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                      
                <NavigationMenu.Item>
                    <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/cgathua">
                        Github
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>  
        </NavigationMenu.Root>
        <ul className={`NavBar2`}>
            {ulLists.map(elem => <li key={elem.id}><a aria-label="mobile nav" href={elem.link}>{elem.title}</a></li>)}
        </ul>
        <button className="MenuBtn" aria-label="menu" aria-haspopup="true" aria-expanded="false"><HamburgerMenuIcon className="IconButton" /></button>
        </nav>
        </header>
    );
};

export default NavigationMenuDesktop;