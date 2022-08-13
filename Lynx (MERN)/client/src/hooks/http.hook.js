import { useState, useCallback } from 'react'


export const use_http = () => {
  const [loading, set_loading] = useState(false)

  const [error, set_error] = useState(null)

  const request = useCallback ( async (url, method = 'GET', body = null, headers = {}) => {
    
    set_loading(true)

    try {

      // TRANSFORM BODY TO STRING
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }

      const response = await fetch(url, {method, body, headers})
      const data = await response.json()

      if(!response.ok) {
        throw new Error(data.message || 'Something went wrong!')
      }

      set_loading(false)

      return data
    } 
    catch (error) {
      set_loading(false)
      set_error(error.message)
      throw error
    }
  }, [])

  const clear_error = useCallback( () => set_error(null), [])

  return { loading, request, error, clear_error }
}