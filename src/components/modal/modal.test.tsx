import { act, render, renderHook, screen } from '@testing-library/react'
import {
  MODAL_CONTENT_DEFAULT_CLASS,
  MODAL_OVERLAY_DEFAULT_CLASS,
  MODAL_SHOW_CLASS,
} from './const'
import useModal from './hooks/useModal'
import useModalAnimation from './hooks/useModalAnimation'
import Modal from './Modal'
import ModalContent from './ModalContent'
import ModalHiddenContainer from './ModalHiddenContainer'
import ModalOverlay from './ModalOverlay'

test('default modal rendering', () => {
  const visible = false
  render(
    <Modal visible={visible} onCancel={jest.fn()}>
      <div>
        <h2>Modal title</h2>
      </div>
    </Modal>
  )

  const modal = screen.getByRole('dialog')

  expect(modal).toHaveClass('ui-modal')
  expect(modal).not.toHaveClass('ui-modal_show')
  expect(modal).not.toHaveClass('ui-modal_hide')
  expect(modal.getAttribute('tabindex')).toBe('-1')
  expect(modal.innerHTML).toBe('')
})

test('opened modal rendering', () => {
  const titleText = 'Modal title'
  const visible = true
  render(
    <>
      <Modal visible={visible} onCancel={jest.fn()}>
        <div>
          <h2>{titleText}</h2>
        </div>
      </Modal>
    </>
  )

  const modal = screen.getByRole('dialog')
  const h2 = screen.getByRole('heading', { level: 2 })

  expect(modal).toHaveClass('ui-modal_show')
  expect(modal).not.toHaveClass('ui-modal_hide')
  expect(h2).toBeInTheDocument()
  expect(h2.textContent).toBe(titleText)
})

test('modal content rendering', () => {
  const customClassName = 'custom-content'
  const { container } = render(
    <ModalContent className={customClassName}>
      <div className="dialog"></div>
    </ModalContent>
  )

  const modalContent = container.querySelector(
    `.${MODAL_CONTENT_DEFAULT_CLASS}`
  )
  const dialog = container.querySelector('.dialog')
  expect(modalContent).toBeInTheDocument()
  expect(dialog).toBeInTheDocument()
  expect(modalContent).toHaveClass(customClassName)
})

test('modal hidden content rendering', () => {
  const className = 'modal-info'
  const { container, rerender } = render(
    <ModalHiddenContainer isHidden={true}>
      <div className={className}></div>
    </ModalHiddenContainer>
  )

  const getInfoBlock = () => container.querySelector(`.${className}`)
  expect(getInfoBlock()).not.toBeInTheDocument()

  rerender(
    <ModalHiddenContainer isHidden={false}>
      <div className={className}></div>
    </ModalHiddenContainer>
  )
  expect(getInfoBlock()).toBeInTheDocument()
})

test('modal overlay rendering', () => {
  const { container } = render(<ModalOverlay />)
  const overlay = container.querySelector(`.${MODAL_OVERLAY_DEFAULT_CLASS}`)

  expect(overlay).toBeInTheDocument()
})

test('useModal hook testing', () => {
  const { result } = renderHook(useModal)

  expect(result.current.isVisible).toBe(false)
  act(() => result.current.openModal())
  expect(result.current.isVisible).toBe(true)
  act(() => result.current.closeModal())
  expect(result.current.isVisible).toBe(false)
})

test('useModalAnimation testing', () => {
  const { result, rerender } = renderHook(useModalAnimation)

  expect(result.current.isHidden).toBe(true)
  expect(result.current.modalClassName).toBe('')

  rerender(true)

  expect(result.current.isHidden).toBe(false)
  expect(result.current.modalClassName).toBe(MODAL_SHOW_CLASS)
})
