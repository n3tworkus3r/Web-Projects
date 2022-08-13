import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { LoginPage } from './views/login/login'
import { LibraryPage } from './views/library/library'
import { PlaylistsPage } from './views/playlists/playlists'

export const use_routes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>

        <Route exact path='/login' element={<LoginPage/>}/>

        <Route path="library" exact>
          <LibraryPage/>
        </Route>

        <Route path="/playlists" exact>
          <PlaylistsPage/>
        </Route>
      </Routes>

    )
  }

  return (
    <Routes>
      {/*  <Route exact path='/' element={<LoginPage/>}/> */}
      <Route exact path='/' element={<LoginPage/>}/>
    </Routes>
  )

}