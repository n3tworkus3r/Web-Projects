import React from "react";
import { use_routes } from "./routes";
import { Background } from './views/background/background';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {

  const routes = use_routes(false)
  return (
    <Router>
      <Background/>
      <div>
        {routes}
      </div>

    </Router>

  )
}

export default App
