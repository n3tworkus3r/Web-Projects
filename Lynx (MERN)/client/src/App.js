import { use_routes } from './routes';
import React, { useState } from 'react';
import { use_auth } from './hooks/auth.hook';
import { auth_context } from './context/auth_context';
import { BrowserRouter as Router } from 'react-router-dom'
import { NavbarBtn } from './views/components/navbar/navbar_button'
import { Background } from './views/components/background/background';
import { NavbarContent } from './views/components/navbar/navbar_content'

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
