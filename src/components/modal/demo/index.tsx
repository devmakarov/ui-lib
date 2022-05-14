import Button from 'components/button/Button'
import { FC } from 'react'
import useModal from '../hooks/useModal'
import Modal from '../Modal'

const ShowCase: FC = () => {
  const { isVisible, closeModal, openModal } = useModal()
  return (
    <>
      <Modal visible={isVisible} onCancel={closeModal} className="custom-modal">
        <div>
          <h2 className="mb-16">Do you want to continue?</h2>
          <p className="mb-24">You can put here a content...</p>
          <Button size="medium" onClick={closeModal}>
           Continie
          </Button>
        </div>
      </Modal>

      <Button onClick={openModal}>Show</Button>
    </>
  )
}

function Demo() {
  return (
    <section className="preview container">
      <h2 className="preview__title mb-24">
        Modal windows
        <a
          className="preview__source"
          href="https://github.com/devmakarov/ui-lib/blob/main/src/components/modal/demo/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/coding.png" width="20px" height="20px" alt="" />
        </a>
      </h2>

      <ShowCase />
    </section>
  )
}

export default Demo
