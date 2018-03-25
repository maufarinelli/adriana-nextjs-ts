import * as React from 'react';
import Head from 'next/head';
import Nav from './Nav';

interface ILayout {
    children?: JSX.Element,
    title?: string,
    menu: object
}

const Layout = ({children = undefined, title = 'This is the default title', menu}: ILayout) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav menu={menu} />
    </header>
    {children}
    <footer>
      I`m here to stay
    </footer>
  </div>
);


export default Layout;
