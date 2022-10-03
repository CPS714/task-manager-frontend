import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Auth0Provider } from '@auth0/auth0-react'

import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css' // this is for bootstrap nav bar

const root = ReactDOM.createRoot(document.getElementById('root'))

// TODO: move Auth0 environment var's to .env
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
    domain='dev-musip85d.us.auth0.com'
    clientId='A38rLwbbBcetjaBQR9lsey888fmQwfny'
    redirectUri={window.location.origin + '/MainPage'}
    > */}
    <App />
  {/* </Auth0Provider> */}
  </React.StrictMode>
)
