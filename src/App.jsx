import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Event from './components/event/Event';
import Parceiros from './components/parceiros/Parceiros';
import Palestrantes from './components/palestrantes/Palestrantes';
import Oficinas from './components/oficinas/Oficinas';
import Cronograma from './components/cronograma/Cronograma';
import Subscribe from './components/subscribes/Subscribe';
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Main />
        <Event />
        <Parceiros/> 
        <Palestrantes/>
        <Oficinas/>
        <Cronograma/>
        <Subscribe/>
        <Footer />
      </div>
    </>
  );
}

export default App;
