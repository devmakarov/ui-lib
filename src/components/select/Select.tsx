import { createContext, FC, useReducer } from 'react'
import { Children } from 'types'
import './index.scss'
import { SelectDefault } from './SelectDefault'
import { SelectMultiple } from './SelectMultiple'
import { UIAction, UIOption, UISelect, UISelectContext, UISelectState, UISelectValue } from './types'

const SelectContext = createContext<UISelectContext>({
    onChange: () => {
        return
    },
    state: {
        isOpen: false,
        list: [],
        mode: 'default',
        value: '',
    },
    dispatch: () => {
        return
    },
})

const selectDefaultReducer = (state: UISelectState, action: UIAction): UISelectState => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            const payload = action.payload as UIOption
            const hasItem = state.list.find((e) => e.id === payload.id)
            if (hasItem) return { ...state }

            return { ...state, list: [...state.list, action.payload as UIOption] }
        case 'SET_ACTIVE':
            return { ...state, value: action.payload as UISelectValue }
        case 'SET_IS_OPEN':
            return { ...state, isOpen: action.payload as boolean }
        default:
            return { ...state }
    }
}

const Select: FC<UISelect & Children> = ({ value, onChange, children, mode = 'default' }) => {
    const [state, dispatch] = useReducer(selectDefaultReducer, {
        list: [],
        value,
        isOpen: false,
        mode,
    })
    const context = {
        state,
        onChange,
        dispatch,
    }
    const isDefault = mode === 'default'

    return (
        <SelectContext.Provider value={context}>
            {isDefault ? <SelectDefault>{children}</SelectDefault> : <SelectMultiple>{children}</SelectMultiple>}
        </SelectContext.Provider>
    )
}

export { Select, SelectContext }
