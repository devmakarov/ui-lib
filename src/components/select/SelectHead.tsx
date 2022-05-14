import { FC } from 'react'
import { Children } from 'types'
import {
  SELECT__HEAD,
  SELECT__INPUT,
  SELECT__SEARCH,
  SELECT__VALUE,
  SEARCH,
} from './conts'
import useSelect from './hooks/useSelect'

const SelectHead: FC<Children> = ({ children }) => {
  const { toggleSelect } = useSelect()

  return (
    <div className={SELECT__HEAD} onClick={toggleSelect}>
      <div className={SELECT__VALUE}>{children}</div>
      <div className={`${SELECT__SEARCH} ${SEARCH}`}>
        <input className={SELECT__INPUT} type="text" />
      </div>
    </div>
  )
}

export default SelectHead
