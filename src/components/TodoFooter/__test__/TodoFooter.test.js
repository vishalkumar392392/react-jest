import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

it("testing todoFooter", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const linkElement = screen.getByText(/5 tasks left/i);
  expect(linkElement).toBeInTheDocument();
});

it("should render 'task' with incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const linkElement = screen.getByText(/1 task left/i);
  expect(linkElement).toBeInTheDocument();
});

it("testing is visible expect", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const linkElement = screen.getByText(/1 task left/i);
  expect(linkElement).toBeVisible();
});

it("testing is contain HTML expect", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const linkElement = screen.getByText(/1 task left/i);
  expect(linkElement).toContainHTML("p");
});

it("testing toHaveTextContent", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const linkElement = screen.getByTestId("paragraph");
  expect(linkElement).toHaveTextContent("1 task left");
});

it("testing tobeFalsy", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const linkElement = screen.getByTestId("paragraph");
  expect(linkElement).not.toBeFalsy();
});

it("testing tobe", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const linkElement = screen.getByTestId("paragraph");
  expect(linkElement.textContent).toBe("1 task left");
});

describe("TodoFooter", () => {
  it("testing todoFooter", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const linkElement = screen.getByText(/5 tasks left/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("should render 'task' with incomplete tasks is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const linkElement = screen.getByText(/1 task left/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("TodoFooter_withchild_Describe", () => {
  describe("Functionality_1", () => {
    it("testing todoFooter", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);
      const linkElement = screen.getByText(/5 tasks left/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("Functionality_2", () => {
    it("should render 'task' with incomplete tasks is one", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const linkElement = screen.getByText(/1 task left/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
