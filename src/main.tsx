import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { sort } from './sort'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

console.log(
  sort([7, 5, 3, 5, 6, 2, 3, 4, 5, 8, 9], (a: number, b: number) => a < b ? -1 : a > b ? 1 : 0)
);
