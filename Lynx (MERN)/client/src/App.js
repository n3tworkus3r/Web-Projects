import React from "react";
import { use_routes } from "./routes";
import {BrowserRouter as Router} from 'react-router-dom'
function App() {

  const routes = use_routes(false)
  return (
    <Router>
      <div>
        {routes}
      </div>
    </Router>
  )
}

export default App
