import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ContextP from './context/ContextP';
import { ToastContainer,Slide, } from "react-toastify";






const queryClient = new QueryClient({defaultOptions:{
  queries:{
    refetchOnWindowFocus : false,
    staleTime : 6000*6000
  }
}});

const rootElement = (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextP>
        <ToastContainer transition={Slide} />
        <App />
      </ContextP>
    </QueryClientProvider>
  </React.StrictMode>
);

const rootElementId = "root";
const rootElementContainer = document.getElementById(rootElementId);

if (rootElementContainer) {
  ReactDOM.createRoot(rootElementContainer).render(rootElement);
} else {
  console.error(`Element with ID '${rootElementId}' not found.`);
}