import { useState } from 'react';

const Button = ({ clickHandler, text }) => (
    <button onClick={clickHandler}>{text}</button>
);

const Statistics = ({ good, bad, neutral }) => {
    const total = good + bad + neutral;
    const counts = good + neutral * 0 + bad * -1;

    if (total === 0) {
        return <p>Press any Button above to start receiving Feedback</p>;
    }

    return (
        <table>
            <tr>Good: {good}</tr>
            <tr>Neutral: {neutral}</tr>
            <tr>Bad: {bad}</tr>
            <tr>All: {total}</tr>
            <tr>Average : {(counts / total).toFixed(1)}</tr>
            <tr>Positive: {((good / total) * 100).toFixed(0)} % </tr>
        </table>
    );
};

const App = () => {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);

    const countGood = () => {
        setGood(good + 1);
    };
    const countBad = () => {
        setBad(bad + 1);
    };
    const countNeutral = () => {
        setNeutral(neutral + 1);
    };

    const resetAll = () => {
        setNeutral(0);
        setBad(0);
        setGood(0);
    };

    return (
        <div>
            <h1>Give Feedback</h1>
            <div className='feed-buttons'>
                <Button clickHandler={countGood} text='Good' />
                <Button clickHandler={countBad} text='Bad' />
                <Button clickHandler={countNeutral} text='Neutral' />
            </div>

            <h2>Statistics</h2>

            <div>
                <Statistics good={good} bad={bad} neutral={neutral} />
            </div>
            <div>
                <Button clickHandler={resetAll} text='Reset' />
            </div>
        </div>
    );
};

export default App;
