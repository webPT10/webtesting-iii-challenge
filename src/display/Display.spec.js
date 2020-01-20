// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

it('renders correctly', () => {
    const { queryByTestId } = render(<Display />)
})

