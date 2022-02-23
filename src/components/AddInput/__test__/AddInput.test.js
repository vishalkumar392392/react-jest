import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodos = jest.fn();

describe("AddInput", () => {
    it("should render input value length", () => {
      render(<AddInput  />);
      const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
      expect(inputElement.value.length).toBe(0);
    });

    it("should render input element", () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        expect(inputElement).toBeInTheDocument();
      });

      it("should be able to type in input element", () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        fireEvent.change(inputElement, {target:{value:"Go Vishal"}})
        expect(inputElement.value).toBe('Go Vishal');
      });

      it("should have empty input element when button is clicked", () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole('button', {name: /Add/i})
        fireEvent.change(inputElement, {target:{value:"Go Vishal"}})
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe('');
      });

  });