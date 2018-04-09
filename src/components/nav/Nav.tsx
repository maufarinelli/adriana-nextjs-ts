import * as React from 'react';
import Link from 'next/link';
// import { find } from 'lodash/find';
import * as _ from "lodash";
import IMenuItem from '../../../interfaces/IMenuItem';

interface NavProps {
    getInitialProps: () => {},
    menu: {
        items: object[]
    }
}

class Nav extends React.Component<any, NavProps> {
    render() {
        const { menu, menuOtherLang, pathname, lang } = this.props;
        const currentMenuItem: IMenuItem | string = _.find(menu.items, (item) => ("/" + item.object_slug === pathname));
        const menuOtherLangItem: IMenuItem | {url: string} = !currentMenuItem ? {url: ''} : _.find(menuOtherLang.items, (item) => (item.order === currentMenuItem));
        let langSwitcher: string = menuOtherLangItem ? menuOtherLangItem.url : '/';
        const langSwitcherLabel = lang === 'en' ? 'fr' : 'en';

        langSwitcher += lang === 'en' ? '?lang=fr' : '?lang=en';

        return (
            <nav className="nav-bar">
                <div className="nav-menu">
                    <Link href={`/?lang=${lang}`}><a>Home</a></Link>
                    { menu.items.map(menuItem => (<Link href={`${menuItem.object_slug}?lang=${lang}`}><a className="nav-link">{menuItem.title}</a></Link>) ) }
                </div>
                <div className="nav-lang-switcher">
                    <a href={langSwitcher}>{langSwitcherLabel.toUpperCase()}</a>
                </div>
            </nav>
        );
    }
}

export default Nav;