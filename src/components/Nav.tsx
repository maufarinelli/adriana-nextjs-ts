import * as React from 'react';
import Link from 'next/link';
// import { find } from 'lodash/find';
import * as _ from "lodash";
import IMenuItem from '../../interfaces/IMenuItem';

interface NavProps {
    getInitialProps: () => {},
    menu: {
        items: object[]
    }
}

class Nav extends React.Component<any, NavProps> {
    render() {
        const { menu, menuOtherLang, pathname } = this.props;

        const currentMenuItem: IMenuItem = _.find(menu.items, (item) => (item.object_slug === pathname));
        const langSwitcher: IMenuItem = _.find(menuOtherLang.items, (item) => (item.order === currentMenuItem.order));

        return (
            <nav>
                <div className="nav-menu">
                    <Link href="/"><a>Home</a></Link>
                    { menu.items.map(menuItem => (<Link href={menuItem.object_slug}><a className="nav-link">{menuItem.title}</a></Link>) ) }
                </div>
                <div className="nav-lang-switcher">
                    <a href={langSwitcher.url}>lang</a>
                </div>
            </nav>
        );
    }
}

export default Nav;