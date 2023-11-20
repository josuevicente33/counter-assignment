// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
// import the Counter component here
import Counter from '../components/Counter'
import { act } from 'react-dom/test-utils';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);

})

test('renders counter message', () => {
  // Screen object from render to verify initial count = 0
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');

  // screen object to check if increment button is present
  const increment = screen.getByText('+');
  expect(increment).toBeInTheDocument();

  // screen object to check if decrement button is present
  const decrement = screen.getByText('-');
  expect(decrement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // use screen to get count element at initial render
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // use screen to get increment button, and click it
  const increment = screen.getByText('+');
  act(() => {
    increment.click();
  })
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // use screen to get decrement button, and click it
  const decrement = screen.getByText('-');
  act (() => {
    decrement.click();
  })
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('-1');
});
