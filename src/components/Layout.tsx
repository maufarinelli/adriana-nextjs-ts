import * as React from 'react';
import Head from 'next/head';
import Nav from './Nav';

interface ILayout {
    children?: JSX.Element,
    title?: string,
    menu: object,
    menuOtherLang: object,
    pathname: string
}

const Layout = ({children = undefined, title = 'This is the default title', menu, menuOtherLang, pathname}: ILayout) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav menu={menu} menuOtherLang={menuOtherLang} pathname={pathname} />
    </header>
    {children}
    <footer>
      I`m here to stay
    </footer>
  </div>
);


export default Layout;
