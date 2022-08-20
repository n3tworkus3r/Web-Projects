import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { LoginPage } from './views/pages/login/login'
import { LibraryPage } from './views/pages/library/library'
import { PlaylistsPage } from './views/pages/playlists/playlists'
import { PlayerPage } from './views/pages/player/player'

export const use_routes = is_authenticated => {
  if (is_authenticated) {
    return (
      <Routes>
        <Route exact path='/' element={<LibraryPage/>}/>
        <Route exact path='/library' element={<LibraryPage/>}/>
        <Route exact path='/playlists' element={<PlaylistsPage/>}/>
        <Route exact path='/player' element={<PlayerPage/>}/>
      </Routes>
    )
  }

  return (
    <Routes>
      <Route exact path='/' element={<LoginPage/>}/>
    </Routes>
  )

}