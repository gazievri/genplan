import Hero from '../components/Hero/Hero.tsx';
import HowIsGoing from '../components/HowIsGoing/HowIsGoing.tsx';
import About from '../components/About/About.tsx';
import Faq from '../components/Faq/Faq.tsx';
import { Cards } from '../types/cards.ts';

interface IProps {
    cards: Cards[]
}

function Home({ cards }: IProps) {
  return (
    <>
      <Hero />
      <HowIsGoing cards={cards} />
      <About />
      <Faq />
    </>
  );
}

export default Home;
