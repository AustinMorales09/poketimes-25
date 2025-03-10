import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux';

import App from './App.jsx'
import './index.css'
import rootReducer from './reducers/rootReducer.jsx';

const store = configureStore({reducer: rootReducer})

createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
</Provider>
  
)
