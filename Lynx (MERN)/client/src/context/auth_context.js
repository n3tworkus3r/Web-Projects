import { createContext } from 'react'

function dummy() {}
export const auth_context = createContext( {
  token: null,
  user_id: null,
  login: dummy,
  logout: dummy,
  isAuthenticated: false
})