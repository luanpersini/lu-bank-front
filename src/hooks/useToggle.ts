import React from 'react'

export const useToggle = (initial = false) => {
  const [isOpen, setIsOpen] = React.useState(initial)
  
  const open = React.useCallback(() => {setIsOpen(true)}, [])
  const close = React.useCallback(() => { setIsOpen(false) }, [])
  const toggle = React.useCallback(() => {setIsOpen((state) => !state) }, [])

  return { isOpen, open, close, toggle }
}
