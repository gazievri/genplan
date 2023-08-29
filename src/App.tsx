import './style/@globals.sass';
import { useEffect, useState } from 'react';
import { Cards } from './types/cards.ts';
import Header from './layout/Header/Header.tsx';
import Main from './layout/Main/Main.tsx';
import Footer from './layout/Footer/Footer.tsx';
import { getAboutCards, getMediaCards } from './api/api.ts';
import { MediaCardType } from './types/mediaCard.ts';
import Preloader from './components/Preloader/Preloader.tsx';
// import ToTop from './components/ToTop/ToTop.tsx';

function App() {
  const [cards, setCards] = useState<Cards[] | null>(null);
  const [mediaCards, setMediaCards] = useState<MediaCardType[] | null>(null);

  const fetchAboutCards = () => {
    getAboutCards().then((res) => {
      if ('message' in res) {
        setCards(null);
      } else {
        setCards(res);
      }
    }).catch((err) => console.log(err));
  };

  const fetchMediaCards = () => {
    getMediaCards().then((res) => {
      if ('message' in res) {
        setMediaCards(null);
      } else {
        setMediaCards(res);
      }
    }).catch((err) => console.log(err));
  };

  useEffect(() => { fetchAboutCards(); fetchMediaCards(); }, []);

  return (
    <>
      {
      cards && mediaCards ? (
        <>
          <Header />
          <Main cards={cards} mediaCards={mediaCards} />
          <Footer />
        </>
      ) : <Preloader />
     }
      {/* <ToTop /> */}
    </>
  );
}

export default App;
