// import React, { useState, useEffect } from 'react';
// import './Mchild.css';

// const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

// const Mchild = ({ name, age, location }) => {
//     const [isFlipped, setIsFlipped] = useState(false);
//     const [backgroundColor, setBackgroundColor] = useState('');

//     useEffect(() => {
//         setBackgroundColor(getRandomColor());
//     }, []);

//     const handleCardClick = () => {
//         setIsFlipped(!isFlipped);
//     };

//     return (
//         <div
//             className={`card ${isFlipped ? 'flipped' : ''}`}
//             onClick={handleCardClick}
//         >
//             <div className="card-inner">
//                 <div
//                     className="card-front"
//                     style={{ backgroundColor: backgroundColor }}
//                 >
//                     <h2>{name}</h2>
//                     <p>Age: {age}</p>
//                 </div>
//                 <div
//                     className="card-back"
//                     style={{ backgroundColor: backgroundColor }}
//                 >
//                     <p>Location: {location}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Mchild;


import React, { useContext, useEffect } from 'react';
import './Mchild.css';
import { CardContext } from '../CardContext';

const Mchild = ({ name, age, location }) => {
    const { state, dispatch } = useContext(CardContext);
    const { isFlipped, backgroundColor } = state;

    useEffect(() => {
        dispatch({ type: 'SET_COLOR' });
    }, [dispatch]);

    const handleCardClick = () => {
        dispatch({ type: 'TOGGLE_FLIP' });
    };

    return (
        <div
            className={`card ${isFlipped ? 'flipped' : ''}`}
            onClick={handleCardClick}
        >
            <div className="card-inner">
                <div
                    className="card-front"
                    style={{ backgroundColor: backgroundColor }}
                >
                    <h2>{name}</h2>
                    <p>Age: {age}</p>
                </div>
                <div
                    className="card-back"
                    style={{ backgroundColor: backgroundColor }}
                >
                    <p>Location: {location}</p>
                </div>
            </div>
        </div>
    );
};

export default Mchild;

