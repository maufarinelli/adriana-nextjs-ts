import * as React from 'react';
import Link from 'next/link';

interface NavProps {
    getInitialProps: () => {},
    menu: {
        items: object[]
    }
}

class Nav extends React.Component<any, NavProps> {
    render() {
        const { menu } = this.props;

        return (
            <nav>
                <Link href="/"><a>Home</a></Link>
                { menu.items.map(menuItem => (<Link href={menuItem.object_slug}><a className="nav-link">{menuItem.title}</a></Link>) ) }
            </nav>
        );
    }
}

export default Nav;