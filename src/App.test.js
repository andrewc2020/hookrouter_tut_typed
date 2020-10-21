import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { findDOMNode } from 'react-dom';
import {Wrapper} from './components/Wrapper';



  test('renders learn react link', () => {
    const { getByText } = render(<App />);
    expect(getByText).toHaveTextContent(/react/i)
    const linkElement = findDOMNode(Wrapper);
    expect(linkElement).toBeInTheDocument();
  });
  
