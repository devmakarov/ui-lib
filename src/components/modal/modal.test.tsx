import { render, screen } from "@testing-library/react";
import { MODAL_CONTENT_DEFAULT_CLASS } from "./const";
import Modal from "./Modal";
import ModalContent from "./ModalContent";

test("default modal rendering", () => {
  const visible = false;
  render(
    <Modal visible={visible} onCancel={jest.fn()}>
      <div>
        <h2>Modal title</h2>
      </div>
    </Modal>
  );

  const modal = screen.getByRole("dialog");

  expect(modal).toHaveClass("ui-modal");
  expect(modal).not.toHaveClass("ui-modal_show");
  expect(modal).not.toHaveClass("ui-modal_hide");
  expect(modal.getAttribute("tabindex")).toBe("-1");
  expect(modal.innerHTML).toBe("");
});

test("opened modal rendering", () => {
  const titleText = "Modal title";
  const visible = true;
  render(
    <>
      <Modal visible={visible} onCancel={jest.fn()}>
        <div>
          <h2>{titleText}</h2>
        </div>
      </Modal>
    </>
  );

  const modal = screen.getByRole("dialog");
  const h2 = screen.getByRole("heading", { level: 2 });

  expect(modal).toHaveClass("ui-modal_show");
  expect(modal).not.toHaveClass("ui-modal_hide");
  expect(h2).toBeInTheDocument();
  expect(h2.textContent).toBe(titleText);
});

test("modal content rendering", () => {
  const customClassName = "custom-content";
  const { container } = render(
    <ModalContent className={customClassName}>
      <div className="dialog"></div>
    </ModalContent>
  );

  const modalContent = container.querySelector(
    `.${MODAL_CONTENT_DEFAULT_CLASS}`
  );
  const dialog = container.querySelector('.dialog');
  expect(modalContent).toBeInTheDocument();
  expect(dialog).toBeInTheDocument();
  expect(modalContent).toHaveClass(customClassName);
});

// test("modal hidden content rendering", () => {});
// test("modal overlay rendering", () => {});

// test("useModal hook testing", () => {});
// test("useModalAnimation testing", () => {});
