import { render, screen } from '@testing-library/react';
import Header from '../Header';

// GET BY

it('testing with getByText', () => {
  render(<Header title="My Todos" />);
  const linkElement = screen.getByText(/My Todos/i);
  expect(linkElement).toBeInTheDocument();
});

it('testing with getByRole with header', () => {
    
    render(<Header title="My Todos" />);
    const headingElement = screen.getByRole("heading", {name:"My Todos"});
    expect(headingElement).toBeInTheDocument();
});

it('testing with getAllByRole with header', () => {
    
    render(<Header title="My Todos" />);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
});


it('testing with getByTitle attritube', () => {
    
    render(<Header title="My Todos" />);
    const headingElement = screen.getByTitle("cats");
    expect(headingElement).toBeInTheDocument();
});

it('testing with testbyId attritube', () => {
    
    render(<Header title="My Todos" />);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
});

// FIND BY

it('testing findBy', async () => {
    render(<Header title="My Todos" />);
    const headingElement = await screen.findByText(/My Todos/i);
    expect(headingElement).toBeInTheDocument();
  });

// Query BY

it('testing queryBy',  () => {
    render(<Header title="My Todos" />);
    const headingElement =  screen.queryByText(/ test/i);
    expect(headingElement).not.toBeInTheDocument();
  });