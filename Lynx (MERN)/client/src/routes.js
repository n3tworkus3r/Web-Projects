import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { login_page } from './pages/login'
import { library_page } from './pages/library'

export const use_routes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>

        <Route exact path='/login' element={<login_page/>}/>


        <Route path="library" exact>
          <library_page/>
        </Route>

        <Route path="playlists" exact>
          <playlists_page/>
        </Route>
      </Routes>

    )
  }

  return (
    <Routes>
        <Route exact path='/' element={<login_page/>}/>
    </Routes>
  )

}