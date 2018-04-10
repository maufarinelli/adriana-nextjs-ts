import * as React from 'react';

import Layout from '../components/Layout';
import IPageProps from '../../interfaces/IPageProps';
import { fetchCurrentPage, fetchMenu, fetchMenuOtherLang } from '../helpers/helpers';

const FR_URL = 'http://159.89.116.112/adriana/wp-json/wp/v2/pages/8';
const EN_URL = 'http://159.89.116.112/adriana/wp-json/wp/v2/pages/4';

class About extends React.Component<any, IPageProps> {
    static async getInitialProps({pathname, query}): Promise<object> {
        const page: object = await fetchCurrentPage(FR_URL, EN_URL, query);
        const menu: object = await fetchMenu(query);
        const menuOtherLang: object = await fetchMenuOtherLang(query);

        return { page, menu, menuOtherLang, query, pathname };
    }

    render() {
        const { page, menu, menuOtherLang, query, pathname } = this.props;
        const content: string = page.content.rendered;
        const title: string = page.title.rendered;

        return (
            <Layout menu={menu} menuOtherLang={menuOtherLang} pathname={pathname} lang={!query.lang ? 'en' : query.lang}>
                <div>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{__html: content }} />
                </div>
            </Layout>
        );
    }
}

export default About;