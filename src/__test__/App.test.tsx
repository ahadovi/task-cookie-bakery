import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('Cookie Bakery', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText('Cookie Bakery')).not.toBeNull();
    });
});