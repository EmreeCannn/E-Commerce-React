
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Store } from './redux/Store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
     
  </Provider>
 
  </>,
)
