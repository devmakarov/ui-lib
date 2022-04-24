import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

test("default button rendering", () => {
  render(<Button>default button</Button>);
  const button = screen.getByRole("button");

  expect(button.classList.contains("ui-btn")).toBe(true);
  expect(button.classList.contains("ui-btn_primary")).toBe(true);
  expect(button.classList.contains("ui-btn_small")).toBe(true);
  expect(button).not.toBeDisabled();
});

test("info button rendering", () => {
  render(<Button type="info">default button</Button>);
  const button = screen.getByRole("button");

  expect(button.classList.contains("ui-btn_info")).toBe(true);
});

test("medium size button rendering", () => {
  render(
    <Button type="info" size="medium">
      info button
    </Button>
  );
  const button = screen.getByRole("button");

  expect(button.classList.contains("ui-btn_medium")).toBe(true);
});

test("large size button rendering", () => {
  render(
    <Button type="info" size="large">
      info button
    </Button>
  );
  const button = screen.getByRole("button");

  expect(button.classList.contains("ui-btn_large")).toBe(true);
});

test("disabled button rendering", () => {
  render(<Button disabled={true}>disabled button</Button>);
  const button = screen.getByRole("button");
  expect(button).toBeDisabled();
});

test("click by disabled button", () => {
  const fn = jest.fn();
  render(
    <Button disabled={true} onClick={fn}>
      disabled button
    </Button>
  );
  const button = screen.getByRole("button");
  expect(button).toBeDisabled();

  userEvent.click(button);
  expect(fn).not.toHaveBeenCalled();
});

test("onClick handler adding to the button", () => {
  const fn = jest.fn();
  render(<Button onClick={fn}>click me!</Button>);

  const button = screen.getByRole("button");
  userEvent.click(button);
  userEvent.click(button);

  expect(fn).toBeCalledTimes(2);
});

test("additional button classname", () => {
  render(<Button className="custom-btn">custom button</Button>);
  const button = screen.getByRole("button");
  expect(button.classList.contains("custom-btn")).toBe(true);
});

test("custom styles", () => {
  render(
    <Button style={{ width: "100%", height: "60%" }}>custom button</Button>
  );
  const button = screen.getByRole("button");
  const styles = button.getAttribute("style");

  expect(styles).toContain("width: 100%");
  expect(styles).toContain("height: 60%");
});

// test('ref passing to btn', () => {});