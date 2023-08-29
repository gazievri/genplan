import BASE_URL from './config.ts';
import { Cards, AboutCardsError } from '../types/cards.ts';
import { MediaCardType, MediaCardError } from '../types/mediaCard.ts';

export const getAboutCards = async () => {
  const res = await fetch(`${BASE_URL}/about-cards/`);
  const cards = await res.json() as Cards[] | AboutCardsError;
  return cards;
};

export const getMediaCards = async () => {
  const res = await fetch(`${BASE_URL}/publications/`);
  const cards = await res.json() as MediaCardType[] | MediaCardError;
  return cards;
};
