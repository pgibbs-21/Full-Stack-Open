import { useState } from 'react';
const History = (props) => {
    if (props.allClicks.length === 0) {
        return <div>The App is Used by Pressing Buttons</div>;
    }

    return <div>Button Press History: {props.allClicks.join(' ')}</div>;
};

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
);

const Total = ({ left, right }) => <p>Total {left + right}</p>;

const App = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);

    const increaseLeft = () => {
        setAll(allClicks.concat('L'));
        setLeft(left + 1);
    };
    const increaseRight = () => {
        setAll(allClicks.concat('R'));
        setRight(right + 1);
    };

    const resetAll = () => {
        setAll([]);
        setLeft(0);
        setRight(0);
    };

    return (
        <div>
            {left}
            <Button handleClick={increaseLeft} text='Left' />
            <Button handleClick={increaseRight} text='Right' />
            {right}
            <History allClicks={allClicks} />
            <Total left={left} right={right} />
            <Button handleClick={resetAll} text='Reset' />
        </div>
    );
};

export default App;
