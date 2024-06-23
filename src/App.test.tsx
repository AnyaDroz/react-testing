import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders 3 list items', () => {
 render(<App />);
 const listItem = screen.getAllByRole("listitem");
 expect(listItem).toHaveLength(3)
});

test('title', () => {
 render(<App />);
 const title = screen.getByTestId("mytestid");
 expect(title).toBeInTheDocument()
});

test('sum should be 6', () => {
 render(<App />);
 const sum = screen.getByTitle("sum")
 expect(sum.textContent).toBe("6")
});