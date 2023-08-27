import './style/@globals.sass';
import { useEffect, useState } from 'react';
import { Cards } from './types/cards.ts';
import Header from './layout/Header/Header.tsx';
import Main from './layout/Main/Main.tsx';
import Footer from './layout/Footer/Footer.tsx';
import { getAboutCards } from './api/api.ts';

function App() {
  const [cards, setCards] = useState<Cards[] | null>(null);

  useEffect(() => {
    getAboutCards().then((res) => {
      if ('message' in res) {
        setCards(null);
      } else {
        setCards(res);
      }
    }).catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      {
        cards && <Main cards={cards} />
      }
      <Footer />
    </>
  );
}

export default App;
