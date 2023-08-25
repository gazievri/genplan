import { BASE_URL } from './config';
import { Cards, AboutCardsError } from '../types/cards';

export const getAboutCards = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/content/about-cards/`);
    const cards = await res.json() as Cards[] | AboutCardsError;
    return cards;
}