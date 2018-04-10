import fetch from 'isomorphic-unfetch';
import IFetchPage from "../../interfaces/IFetchPage";
import ILang from "../../interfaces/ILang";

const MENU_URL_EN: string = 'http://159.89.116.112/adriana/wp-json/wp-api-menus/v2/menus/15';
const MENU_URL_FR: string = 'http://159.89.116.112/adriana/wp-json/wp-api-menus/v2/menus/16';

export async function fetchCurrentPage(FR_URL: string, EN_URL: string, query: ILang): Promise<object> {
    const fetchedPage: IFetchPage = (query.lang === 'fr') ?
        await fetch(FR_URL) :
        await fetch(EN_URL);
    return await fetchedPage.json();
}

export async function fetchMenu(query: ILang): Promise<object>  {
    const fetchedMenuEn: IFetchPage = await fetch(MENU_URL_EN);
    const fetchedMenuFr: IFetchPage = await fetch(MENU_URL_FR);

    return (query.lang === 'fr') ? await fetchedMenuFr.json() : await fetchedMenuEn.json();
}

export async function fetchMenuOtherLang(query): Promise<object>  {
    const fetchedMenuEn: IFetchPage = await fetch(MENU_URL_EN);
    const fetchedMenuFr: IFetchPage = await fetch(MENU_URL_FR);

    return (query.lang === 'fr') ? await fetchedMenuEn.json() : await fetchedMenuFr.json();
}