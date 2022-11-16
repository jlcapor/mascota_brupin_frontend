import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {RouterProvider} from 'react-router-dom';
import router from './router/routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
     <Provider store={store}>
      <App/>
    </Provider>
    </Suspense>
  </React.StrictMode>
)
