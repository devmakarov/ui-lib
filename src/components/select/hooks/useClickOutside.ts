import { RefObject, useContext, useEffect } from 'react'
import { SelectContext } from '../Select'
import useSelect from './useSelect'

function useClickOutside(root: RefObject<HTMLElement>) {
  const { state: isOpen } = useContext(SelectContext)
  const { closeSelect } = useSelect()

  useEffect(() => {
    const clickOutside = (e: Event) => {
      if (!isOpen || !e.target) return
      const target = e.target as Node

      if (!root.current?.contains(target)) {
        closeSelect()
      }
    }

    document.body.addEventListener('click', clickOutside)

    return () => {
      document.body.removeEventListener('click', clickOutside)
    }
  }, [isOpen, root, closeSelect])
}

export default useClickOutside
