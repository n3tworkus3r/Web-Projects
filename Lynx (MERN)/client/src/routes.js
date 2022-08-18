import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { LoginPage } from './views/login/login'
import { LibraryPage } from './views/library/library'
import { PlaylistsPage } from './views/playlists/playlists'
import { PlayerPage } from './views/player/player'

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