import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo integration test", () => {
  it("checking whether input element is rendering on TodoList", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Go shopping bro" } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go shopping bro/i);
    expect(divElement).toBeInTheDocument();
  });

  it("checking multiple items whether input element is rendering on TodoList", () => {
    render(<MockTodo />);
    addTask([
      "my name is vishal",
      "I am a full stack developer",
      "I am AWS SAA",
    ]);
    const arrayOfElements = screen.getAllByTestId("task-container");
    expect(arrayOfElements.length).toBe(3);
  });

  it("task initially should not rendered with line-through which indicates completed", () => {
    render(<MockTodo />);
    addTask(["checking bro"]);
    const divElement = screen.getByText(/checking bro/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should rendered with line-through which indicates completed", () => {
    render(<MockTodo />);
    addTask(["checking bro"]);
    const divElement = screen.getByText(/checking bro/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });

});
