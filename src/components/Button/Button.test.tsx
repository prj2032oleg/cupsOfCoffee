import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('renders with the correct label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    
    fireEvent.click(screen.getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies primary variant styles by default', () => {
    render(<Button label="Primary Button" />);
    const button = screen.getByTestId('button');
    
    // Check that the button has the primary class
    expect(button.className).toContain('bg-coffee-600');
  });

  test('applies secondary variant styles when specified', () => {
    render(<Button label="Secondary Button" variant="secondary" />);
    const button = screen.getByTestId('button');
    
    // Check that the button has the secondary class
    expect(button.className).toContain('bg-coffee-200');
  });

  test('applies disabled styles when disabled', () => {
    render(<Button label="Disabled Button" disabled />);
    const button = screen.getByTestId('button');
    
    expect(button).toBeDisabled();
    expect(button.className).toContain('opacity-50');
  });
});