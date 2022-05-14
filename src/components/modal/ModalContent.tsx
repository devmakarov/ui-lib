import { FC } from 'react'
import { Children } from 'types'
import { MODAL_CONTENT_DEFAULT_CLASS } from './const'
import { UIModalContent } from './types'

const ModalContent: FC<UIModalContent & Children> = ({
  children,
  className,
}) => {
  return (
    <div className={`${MODAL_CONTENT_DEFAULT_CLASS} ${className}`}>
      {children}
    </div>
  )
} 

export default ModalContent