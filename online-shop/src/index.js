import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter } from "react-router-dom"
import {createStore } from "redux"
import { Provider } from 'react-redux'

const defaultState={
  products:[
    {
      name:"Apple Iphone 14",
      color:"black",
      image:"https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-ip14/blue/front.png",
      price:599,
      inCart:1,
      id:1
    },
    {
      name:"Apple Iphone 14",
      color:"black",
      image:"https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-ip14/blue/front.png",
      price:699,
      inCart:1,
      id:1
    },
    {
      name:"Apple Iphone 13",
      color:"black",
      image:"https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-ip14/blue/front.png",
      price:499,
      inCart:1,
      id:1
    },
    {
      name:"Apple MackBook Air M1 13 ",
      color:"black",
      image:"https://uno.ma/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/m/a/macbook-pro-14-2021-puce-m1-pro-gris-sideral-uno-maroc.jpeg",
      price:999,
      inCart:1,
      id:1
    },
    {
      name:"Apple MackBook Pro 13 M2",
      color:"black",
      image:"https://uno.ma/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/m/a/macbook-pro-14-2021-puce-m1-pro-gris-sideral-uno-maroc.jpeg",
      price:1499,
      inCart:1,
      id:1
    }
  ],
  cartProducts:[],
}

const reducer=(state=defaultState,action) => {
  switch(action.type){
    default:
      return state
  }
}

const store = createStore(reducer);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

