import { FC, MouseEvent, memo } from 'react'
import { UIModal } from './types'
import './index.scss'
import { MODAL_DEFAULT_CLASS, MODAL_OVERLAY_DEFAULT_CLASS } from './const'
import { Children } from 'types'
import ModalOverlay from './ModalOverlay'
import ModalContent from './ModalContent'
import ModalHiddenContainer from './ModalHiddenContainer'
import useModalAnimation from './hooks/useModalAnimation'

const Modal: FC<UIModal & Children> = ({
  onCancel,
  visible,
  children,
  className = '',
}) => {
  const { isHidden, modalClassName } = useModalAnimation(visible)

  const prepareClasses = () => {
    const defaultClassName = MODAL_DEFAULT_CLASS
    return `${defaultClassName} ${modalClassName}`
  }
  const modalClassNames = prepareClasses()

  const hideByClickOutside = (e: MouseEvent<HTMLDivElement>) => {
    if (!visible) return
    const target = e.target as HTMLDivElement

    if (target.classList.contains(MODAL_OVERLAY_DEFAULT_CLASS) && onCancel) {
      onCancel(e)
    }
  }

  return (
    <div
      className={modalClassNames}
      onClick={hideByClickOutside}
      tabIndex={-1}
      role="dialog"
    >
      <ModalHiddenContainer isHidden={isHidden}>
        <ModalOverlay />
        <ModalContent className={className}>{children}</ModalContent>
      </ModalHiddenContainer>
    </div>
  )
}

Modal.displayName = 'Modal'
export default memo(Modal)
