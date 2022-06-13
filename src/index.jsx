import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { ThemeProvider } from './context/theme';
import { TodoProvider } from './context/todo';
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container);

// App.getDerivedStateFromProps = () => {
//   console.log(document.getElementById('heading'));
//   console.log('getDerivedStateFromProps');
//   return {
//     message: 'I am calling you from outside',
//   };
// };

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ThemeProvider>
  </BrowserRouter>
);
