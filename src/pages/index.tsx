import * as React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';

interface AppProps {
    pageJson: object
}

interface IFetch {
    json: () => ({})
}

class Home extends React.Component<any, AppProps> {
    static async getInitialProps(): Promise<object> {
        const url: string = 'http://159.89.116.112/adriana/wp-json/wp/v2/pages/2';
        const page: IFetch = await fetch(url);
        const pageJson: object = await page.json();
        return { pageJson };
    }

    render() {
        const { pageJson } = this.props;
        const content: string = pageJson.content.rendered;

        return (
          <Layout>
            <div>
              <h1>Hello World.</h1>
              <div dangerouslySetInnerHTML={{__html: content }} />
            </div>
          </Layout>
        );
    }
}

export default Home;