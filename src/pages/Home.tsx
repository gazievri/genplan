import Hero from '../components/Hero/Hero.tsx';
import HowIsGoing from '../components/HowIsGoing/HowIsGoing.tsx';
import About from '../components/About/About.tsx';
import Faq from '../components/Faq/Faq.tsx';
import MediaBlock from '../components/Media/Media.tsx';
import { Cards } from '../types/cards.ts';
import { MediaCardType } from '../types/mediaCard.ts';

interface IProps {
    cards: Cards[],
    mediaCards: MediaCardType[],
}

function Home({ cards, mediaCards }: IProps) {
  return (
    <>
      <Hero />
      <HowIsGoing cards={cards} />
      <About />
      <MediaBlock mediaCards={mediaCards} />
      <Faq />
    </>
  );
}

export default Home;
