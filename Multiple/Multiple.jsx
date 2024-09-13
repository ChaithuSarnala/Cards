// import React, { useState, useEffect } from 'react';
// import Mchild from './Mchild/Mchild';

// const cardData = [
//     { id: 1, name: 'Chaitanya', age: '31', location: 'Hyderabad' },
//     { id: 2, name: 'Sowmya', age: '23', location: 'Kakinada' },
//     { id: 3, name: 'Kusala', age: '24', location: 'Guntur' },
//     { id: 4, name: 'Navya', age: '31', location: 'Vijayawada' },
//     { id: 5, name: 'Vedvika', age: '3', location: 'Eluru' },
//     { id: 6, name: 'John', age: '31', location: 'New York' },
//     { id: 7, name: 'Helena', age: '23', location: 'Dallas' },
//     { id: 8, name: 'Annie', age: '32', location: 'Chicago' },
//     { id: 9, name: 'Json', age: '37', location: 'Ontario' },
//     { id: 10, name: 'Catherine', age: '33', location: 'New Jersey' },
// ];

// const ITEMS_PER_PAGE = 1;
// const BUTTONS_PER_PAGE = 3;

// const Multiple = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [showPrevious, setShowPrevious] = useState(false);

//     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//     const endIndex = startIndex + ITEMS_PER_PAGE;
//     const currentCards = cardData.slice(startIndex, endIndex);

//     const startButtonIndex = Math.floor((currentPage - 1) / BUTTONS_PER_PAGE) * BUTTONS_PER_PAGE;
//     const displayedButtons = cardData.slice(startButtonIndex, startButtonIndex + BUTTONS_PER_PAGE);

//     useEffect(() => {
//         if (currentPage > 1) {
//             setShowPrevious(true);
//         } else {
//             setShowPrevious(false);
//         }
//     }, [currentPage]);

//     const handleNext = () => {
//         if (endIndex < cardData.length) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const handlePrevious = () => {
//         if (startIndex > 0) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleLast = () => {
//         setCurrentPage(cardData.length);
//     };

//     const handleFirst = () => {
//         setCurrentPage(1);
//     };

//     return (
//         <div style={{ textAlign: 'center' }}>
//             <h1>User Details</h1>
//             <div
//                 style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     flexWrap: 'wrap',
//                 }}
//             >
//                 {currentCards.map((card) => (
//                     <Mchild
//                         key={card.id}
//                         name={card.name}
//                         age={card.age}
//                         location={card.location}
//                     />
//                 ))}
//             </div>

//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                
//                 {currentPage >= 4 && (
//                     <button onClick={handleFirst}>First</button>
//                 )}
                
                
//                 {showPrevious && (
//                     <button onClick={handlePrevious} disabled={currentPage === 1}>
//                         Previous
//                     </button>
//                 )}

//                 <div style={{ display: 'flex', margin: '0 20px' }}>
//                     {displayedButtons.map((card) => (
//                         <button
//                             key={card.id}
//                             onClick={() => setCurrentPage(card.id)}
//                             style={{
//                                 margin: '0 5px',
//                                 padding: '5px 10px',
//                                 backgroundColor: currentPage === card.id ? 'lightblue' : '',
//                             }}
//                         >
//                             {card.id}
//                         </button>
//                     ))}
//                 </div>

//                 {endIndex < cardData.length && (
//                     <button onClick={handleNext}>Next</button>
//                 )}
                
//                 {currentPage < cardData.length && (
//                     <button onClick={handleLast}>Last</button>
//                 )}

                

              
//             </div>
//         </div>
//     );
// };

// export default Multiple;


import React, { useContext, useEffect } from 'react';
import Mchild from './Mchild/Mchild';
import { CardContext } from './CardContext';

const Multiple = () => {
    const { state, dispatch } = useContext(CardContext);
    const { currentPage, showPrevious, cardData } = state;

    const ITEMS_PER_PAGE = 1;
    const BUTTONS_PER_PAGE = 3;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentCards = cardData.slice(startIndex, endIndex);

    const startButtonIndex = Math.floor((currentPage - 1) / BUTTONS_PER_PAGE) * BUTTONS_PER_PAGE;
    const displayedButtons = cardData.slice(startButtonIndex, startButtonIndex + BUTTONS_PER_PAGE);

    useEffect(() => {
        dispatch({
            type: 'SHOW_PREVIOUS',
            payload: currentPage > 1,
        });
    }, [currentPage, dispatch]);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{color:'aquamarine'}}>User Details</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                {currentCards.map((card) => (
                    <Mchild
                        key={card.id}
                        name={card.name}
                        age={card.age}
                        location={card.location}
                    />
                ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px',gap:'8px' }}>
                {currentPage >= 4 && (
                    <button onClick={() => dispatch({ type: 'FIRST_PAGE' })}>First</button>
                )}

                {showPrevious && (
                    <button onClick={() => dispatch({ type: 'PREVIOUS_PAGE' })} disabled={currentPage === 1}>
                        Previous
                    </button>
                )}

                <div style={{ display: 'flex', margin: '0 20px' }}>
                    {displayedButtons.map((card) => (
                        <button
                            key={card.id}
                            onClick={() => dispatch({ type: 'SET_PAGE', payload: card.id })}
                            style={{
                                margin: '0 5px',
                                padding: '5px 10px',
                                backgroundColor: currentPage === card.id ? 'lightblue' : '',
                            }}
                        >
                            {card.id}
                        </button>
                    ))}
                </div>

                {endIndex < cardData.length && (
                    <button onClick={() => dispatch({ type: 'NEXT_PAGE' })}>Next</button>
                )}

                {currentPage < cardData.length && (
                    <button onClick={() => dispatch({ type: 'LAST_PAGE' })}>Last</button>
                )}
            </div>
        </div>
    );
};

export default Multiple;

