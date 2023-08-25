import './style/@globals.sass';
import { useEffect, useState } from 'react';
import { Cards } from './types/cards';
import { Main } from './layout/Main/Main';
import { Footer } from './layout/Footer/Footer';
import { getAboutCards } from './api/api';

function App() {
  const [cards, setCards] = useState<Cards[] | null>(null);

  useEffect(() => {
    getAboutCards().then(res => {
      if ('message' in res) {
        setCards(null);
      } else {
        setCards(res);
      }
    }).catch(err => console.log(err));
  }, [])

  return (
    <>
      {
        cards && <Main cards={cards} />
      }
      <Footer />
    </>
  )
}

export default App;