import React from 'react';
// import './App.css';

// redux imports
import { Provider } from 'react-redux';
import { store } from './store/store'

// components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Content from './components/content/Content';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
