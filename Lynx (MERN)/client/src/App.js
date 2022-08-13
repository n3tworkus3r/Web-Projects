import React from 'react';
import 'materialize-css'
import { use_routes } from './routes';
import { use_auth } from './hooks/auth.hook';
import { auth_context } from './context/auth_context';
import { BrowserRouter as Router } from 'react-router-dom'
import { Background } from './views/background/background';



function App() {

  const {token, login, logout, user_id} = use_auth()
  const is_authenticated = !!token
  const routes = use_routes(is_authenticated)

  return (
    <auth_context.Provider value= {{token, login, logout, user_id, is_authenticated}}>
      <Router> 
        <div>
          {routes}
        </div>
        <Background/>
      </Router>
    </auth_context.Provider>
  )
}

export default App
