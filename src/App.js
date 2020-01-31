import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';

import ImageGrid from './components/ImageGrid';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Work from './components/Work'

import configureStore from './store';

const store = configureStore();

class App extends Component {
  onSearchSubmit(term) {
    console.log(term);
}
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                <NavBar />  
              
           
                    <ImageGrid />
                    <Work />
                    <Footer />
                </Fragment>
            </Provider>
        );
    }
}

export default App;