import React from 'react';
import { Provider } from 'react-redux';

import Video from './components/Video/index';
import Sidebar from './components/Sidebar/index';
import Footer from './components/Footer/index';

import store from './store/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Sidebar />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
