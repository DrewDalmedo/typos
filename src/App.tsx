import React from 'react';
// import './App.css';

// components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Content from './components/content/Content';
import { useDispatch } from 'react-redux';
import { generateWords } from './store/words/actions';

// misc
import { DEFAULT_WORD_COUNT } from './defaults';

const App = () => {
  const dispatch = useDispatch();
  dispatch(generateWords(DEFAULT_WORD_COUNT))

  return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
  );
}

export default App;
