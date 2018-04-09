import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

interface AppProps {
    page: object,
    menu: object
}

interface IFetch {
    json: () => ({})
}

class Home extends React.Component<any, AppProps> {
    static async getInitialProps({pathname, query}): Promise<object> {

        const fetchedPage: IFetch = await fetch('http://159.89.116.112/adriana/wp-json/wp/v2/pages/2');
        const page: object = await fetchedPage.json();

        // Todo: I18n menu
        const fetchedMenuEn: IFetch = await fetch('http://159.89.116.112/adriana/wp-json/wp-api-menus/v2/menus/15');
        const fetchedMenuFr: IFetch = await fetch('http://159.89.116.112/adriana/wp-json/wp-api-menus/v2/menus/16');

        const menu: object = query.lang === 'fr' ? await fetchedMenuFr.json() : await fetchedMenuEn.json();
        const menuOtherLang: object = query.lang !== 'fr' ? await fetchedMenuFr.json() : await fetchedMenuEn.json();

        return { page, menu, menuOtherLang, query, pathname };
    }

    render() {
        const { page, menu, menuOtherLang, query, pathname } = this.props;
        const content = page.content.rendered;

        return (
            <Layout menu={menu} menuOtherLang={menuOtherLang} pathname={pathname} lang={(!query.lang) ? 'en' : query.lang}>
                <div>
                    <h1>Hello World.</h1>
                    <div dangerouslySetInnerHTML={{__html: content }} />
                </div>
            </Layout>
        );
    }
}

export default Home;