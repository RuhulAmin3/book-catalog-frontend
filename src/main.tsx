import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import router from './routes/index.tsx';
import {RouterProvider} from "react-router-dom";
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
      <Provider store={store}>
      <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
