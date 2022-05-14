import { useEffect, useState } from 'react'
import {
  ANIMATION_DURATION,
  MODAL_HIDE_CLASS,
  MODAL_SHOW_CLASS,
} from '../const'

function useModalAnimation(visible: boolean) {
  const isShowingStarted = visible

  const [isHidden, setIsHidden] = useState(() => true)
  const [modalClassName, setClassName] = useState(() => '')

  useEffect(() => {
    const startShowingAnimation = () => {
      setClassName(MODAL_SHOW_CLASS)
      setIsHidden(false)
    }

    const startHiddingAnimation = () => {
      if (!modalClassName) return

      setClassName(`${modalClassName} ${MODAL_HIDE_CLASS}`)
      setIsHidden(false)
    }

    const clearAnimation = () => {
      setTimeout(() => {
        setClassName('')
        setIsHidden(true)
      }, ANIMATION_DURATION)
    }

    if (isShowingStarted) {
      startShowingAnimation()
      return
    }

    startHiddingAnimation()
    clearAnimation()
    // eslint-disable-next-line
  }, [visible, isShowingStarted]);

  return {
    isHidden,
    modalClassName,
  }
}

export default useModalAnimation
