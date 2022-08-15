import React, { useState } from 'react';
import { use_routes } from './routes';
import { NavbarBtn } from './components/navbar/navbar_button'
import { use_auth } from './hooks/auth.hook';
import { auth_context } from './context/auth_context';
import { NavbarContent } from './components/navbar/navbar_content'
import { BrowserRouter as Router } from 'react-router-dom'
import { Background } from './components/background/background';



function App() {

  const [navbar_active, set_navbar_active] = useState(false)
  const {token, login, logout, user_id} = use_auth()
  const is_authenticated = !!token
  const routes = use_routes(is_authenticated)

  return (
    <auth_context.Provider value= {{token, login, logout, user_id, is_authenticated}}>
      <Router> 
        { is_authenticated && <NavbarBtn set_active={set_navbar_active} /> }
        <div>
          {routes}
        </div>
        <NavbarContent active={navbar_active} set_active={set_navbar_active} />
        <Background/>
      </Router>
    </auth_context.Provider>
  )
}

export default App
