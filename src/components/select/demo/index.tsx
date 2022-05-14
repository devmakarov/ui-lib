import { FC, useState } from 'react'
import { Option } from '../Option'
import { Select } from '../Select'
import { UISelectValue } from '../types'

const ShowCase: FC = () => {
  const [value] = useState('')
  const onChange = (e: UISelectValue) => {
    console.log(e)
  }

  return (
    <section className="mb-16">
      <Select value={value} onChange={onChange}>
        <Option id="option_1" label="Option 1">
          Option 1
        </Option>
        <Option id="option_2" label="Option 2">
          Option 2
        </Option>
        <Option id="option_3" label="Option 3">
          Option 3
        </Option>
      </Select>
    </section>
  )
}

const ShowCasePredefined: FC = () => {
  const [value] = useState('option_1')
  const onChange = (e: UISelectValue) => {
    console.log(e)
  }

  return (
    <section className="mb-16">
      <Select value={value} onChange={onChange}>
        <Option id="option_1" label="Option 1">
          Option 1
        </Option>
        <Option id="option_2" label="Option 2">
          Option 2
        </Option>
        <Option id="option_3" label="Option 3">
          Option 3
        </Option>
      </Select>
    </section>
  )
}

const ShowCaseMultiple: FC = () => {
  const [value] = useState(['option_1'])
  const onChange = (e: UISelectValue) => {
    console.log(e)
  }

  return (
    <section>
      <Select mode="multiple" value={value} onChange={onChange}>
        <Option id="option_1" label="Option 1">
          Option 1
        </Option>
        <Option id="option_2" label="Option 2">
          Option 2
        </Option>
        <Option id="option_3" label="Option 3">
          Option 3
        </Option>
      </Select>
    </section>
  )
}

const Demo: FC = () => {
  return (
    <section className="preview container">
      <h2 className="preview__title mb-24">
        Select
        <a
          className="preview__source"
          href="https://github.com/devmakarov/ui-lib/blob/main/src/components/select/demo/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/coding.png" width="20px" height="20px" alt="" />
        </a>
      </h2>

      <ShowCase />
      <ShowCasePredefined />
      <ShowCaseMultiple />
    </section>
  )
}

export default Demo
