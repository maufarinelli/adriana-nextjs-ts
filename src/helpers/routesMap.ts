import IMenuMap from '../../interfaces/IMenuMap';

const homeMap: IMenuMap = {
    en: '/',
    fr: '/'
};

const aboutMap: IMenuMap = {
    en: '/about',
    fr: '/a-propos'
};

const blogMap: IMenuMap = {
    en: '/blog',
    fr: '/blog-fr'
};

const priceMap: IMenuMap = {
    en: '/price',
    fr: '/prix'
};

const contactMap: IMenuMap = {
    en: '/contact',
    fr: '/contact-fr'
};

const routesMap = {
    'index': homeMap,
    'about': aboutMap,
    'a-propos': aboutMap,
    'blog': blogMap,
    'blog-fr': blogMap,
    'price': priceMap,
    'prix': priceMap,
    'contact': contactMap,
    'contact-fr': contactMap
};

export default routesMap;