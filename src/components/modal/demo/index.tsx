import Button from "components/button/Button";
import Modal, { useModal } from "../Modal";

function Demo() {
  const { isVisible, closeModal, openModal } = useModal();

  return (
    <div>
      <Modal visible={isVisible} onCancel={closeModal} className="custom-modal">
        <div>
          <h2>Modal title</h2>
          <Button size="medium" onClick={closeModal}>
            close modal
          </Button>
        </div>
      </Modal>

      <Button size="medium" onClick={openModal}>
        open modal
      </Button>
    </div>
  );
}

export default Demo;
