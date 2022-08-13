import { useCallback } from 'react'

export const use_message = () => {
  return useCallback(text =>  {
    if (window.M && text) {
      window.M.toast({html: text})
    }
  }, [])
}