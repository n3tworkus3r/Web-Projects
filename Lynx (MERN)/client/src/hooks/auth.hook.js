import { useState, useCallback, useEffect } from 'react'

const storage_name = 'userData'

 export const use_auth = () => {
  const[token, set_token] = useState(null)
  const[user_id, set_user_id] = useState(null)

  const login = useCallback( (jsonwebtoken, id) => {
    set_token(jsonwebtoken)
    set_user_id(id)

    localStorage.setItem(storage_name, JSON.stringify({ user_id: id, token: jsonwebtoken}))
  }, [])

  const logout = useCallback( () => {
    set_token(null)
    set_user_id(null)
    localStorage.removeItem(storage_name)
  }, [])

  useEffect( () => {
    const data = JSON.parse(localStorage.getItem(storage_name))

    if (data && data.token) {
      login(data.token, data.user_id)
    }
  }, [login])

  return { login, logout, token, user_id }
}