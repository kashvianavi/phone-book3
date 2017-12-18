import React from 'react';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import promise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
import ContactList from './components/contact_list';
import ContactForm from './components/contact_form';


ReactDOM.render(

  <Provider store={createStoreWithMiddleware(reducers)}>

      <div>
      <ContactForm />
      <ContactList />
    </div>
    </Provider>,
  document.querySelector(".container")
);
