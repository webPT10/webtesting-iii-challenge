// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

describe('Display >', () => {
    it('shows closed when closed', () => {
        const display = render(<Display closed />)

        expect(display.getAllByText(/closed/i))
    })
    
})