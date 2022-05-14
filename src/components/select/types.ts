export type UISelectModes = 'default' | 'multiple'
export type UISelectValue = string | number | UISelectValue[]
export type UISelectSizes = 'small' | 'medium' | 'large'
export type UISelectStyles = Record<string, string | number>

export interface UISelect {
    value: UISelectValue
    mode?: UISelectModes
    hasSearch?: boolean
    className?: string
    size?: UISelectSizes
    onChange: (v: UISelectValue) => void
    onInput?: (v: UISelectValue) => void
    disabled?: boolean
    styles?: UISelectStyles
}

export interface UISelectContext {
    onChange: (v: UISelectValue) => void
    onInput?: (v: UISelectValue) => void

    state: UISelectState
    dispatch: (action: UIAction) => void
}

export interface UIOption {
    id: UISelectValue
    label: string
    disabled?: boolean
}

export type UIAction = {
    type: string
    payload: unknown
}

export interface UISelectState {
    mode: UISelectModes
    value: UISelectValue
    list: UIOption[]
    isOpen: boolean
}

// export interface UISelectStateMultiple {
//   value: UISelectValue[];
//   list: UIOption[];
//   isOpen: boolean;
// }

// export interface UISelectStateContext {
//   state: UISelectState;
//   dispatch: (action: UIAction) => void;
// }

// export interface UISelectStateMultipleContext {
//   state: UISelectStateMultiple;
//   dispatch: (action: UIAction) => void;
// }

// export interface UIOptionContext {
//   context: UISelectStateContext | UISelectStateMultipleContext | any;
// }

export interface UISelectBody {
    isOpen: boolean
}
