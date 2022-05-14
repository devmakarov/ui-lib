import { FC } from 'react'
import { Children } from 'types'
import { SELECT_BODY, SELECT_BODY_SHOW } from './conts'
import { UISelectBody } from './types'

const SelectBody: FC<UISelectBody & Children> = ({ isOpen, children }) => {
  return (
    <div className={`${SELECT_BODY} ${isOpen ? SELECT_BODY_SHOW : ''}`}>
      {children}
    </div>
  )
}

export { SelectBody }
