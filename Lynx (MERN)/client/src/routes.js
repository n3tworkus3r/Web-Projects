import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { LoginPage } from './pages/login'
import { LibraryPage } from './pages/library'
import { PlaylistsPage } from './pages/playlists'

export const use_routes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>

        <Route exact path='/login' element={<LoginPage/>}/>


        <Route path="library" exact>
          <LibraryPage/>
        </Route>

        <Route path="playlists" exact>
          <PlaylistsPage/>
        </Route>
      </Routes>

    )
  }

  return (
    <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
    </Routes>
  )

}