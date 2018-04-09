import * as React from 'react';
import Head from 'next/head';
import Nav from './nav/Nav';

interface ILayout {
    children?: JSX.Element,
    title?: string,
    menu: object,
    menuOtherLang: object,
    pathname: string,
    lang: string
}

const Layout = ({children = undefined, title = 'This is the default title', menu, menuOtherLang, pathname, lang}: ILayout) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav menu={menu} menuOtherLang={menuOtherLang} pathname={pathname} lang={lang} />
    </header>
    {children}
    <footer>
      I`m here to stay
    </footer>
  </div>
);


export default Layout;
