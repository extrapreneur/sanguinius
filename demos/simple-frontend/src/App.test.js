import { render, screen } from '@testing-library/react';
import App from './App';
import { create } from "react-test-renderer";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("snapshot test", () => {
  test("testing app button", () => {
    let tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});