import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
//import Stateapp from './stateApp'
import Reducerapp from './reducer_app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <App />*/}
   {/*<Stateapp/>*/}
   <Reducerapp/>
  </React.StrictMode>,
)
