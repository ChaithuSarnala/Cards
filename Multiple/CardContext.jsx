import React, { createContext, useReducer } from 'react';

const cardData = [
    { id: 1, name: 'Chaitanya', age: '31', location: 'Hyderabad' },
    { id: 2, name: 'Sowmya', age: '23', location: 'Kakinada' },
    { id: 3, name: 'Kusala', age: '24', location: 'Guntur' },
    { id: 4, name: 'Navya', age: '31', location: 'Vijayawada' },
    { id: 5, name: 'Vedvika', age: '3', location: 'Eluru' },
    { id: 6, name: 'John', age: '31', location: 'New York' },
    { id: 7, name: 'Helena', age: '23', location: 'Dallas' },
    { id: 8, name: 'Annie', age: '32', location: 'Chicago' },
    { id: 9, name: 'Json', age: '37', location: 'Ontario' },
    { id: 10, name: 'Catherine', age: '33', location: 'New Jersey' },
];

const ITEMS_PER_PAGE = 1;
const BUTTONS_PER_PAGE = 3;

const initialState = {
    currentPage: 1,
    showPrevious: false,
    isFlipped: false,
    cardData: cardData,
    backgroundColor: '',
};

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return { ...state, currentPage: state.currentPage + 1 };
        case 'PREVIOUS_PAGE':
            return { ...state, currentPage: state.currentPage - 1 };
        case 'SET_PAGE':
            return { ...state, currentPage: action.payload };
        case 'SHOW_PREVIOUS':
            return { ...state, showPrevious: action.payload };
        case 'FIRST_PAGE':
            return { ...state, currentPage: 1 };
        case 'LAST_PAGE':
            return { ...state, currentPage: cardData.length };
        case 'TOGGLE_FLIP':
            return { ...state, isFlipped: !state.isFlipped };
        case 'SET_COLOR':
            return { ...state, backgroundColor: getRandomColor() };
        default:
            return state;
    }
};

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CardContext.Provider value={{ state, dispatch }}>
            {children}
        </CardContext.Provider>
    );
};
