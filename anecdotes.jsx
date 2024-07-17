import { useState } from 'react';

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.',
    ];

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState({});

    const updateSelected = () => {
        if (selected < anecdotes.length - 1) {
            return setSelected(selected + 1);
        } else {
            setSelected(0);
        }
    };

    const updateVote = () => {
        // selection is the index of the anecdotes array
        setVotes((prevVotes) => {
            // prevVotes keeps track of how many votes at the selection
            let currentVotes = 0; // initialize current votes to 0
            if (prevVotes[selected] !== undefined) {
                // if the value of prevVotes at the selected index is not defined then it has no votes so set it to zero to avoid errors
                currentVotes = prevVotes[selected];
            }

            const newVoteCount = currentVotes + 1; // keep track of new votes and incriment them
            const newVotes = {
                // make a new object to keep track of them
                ...prevVotes, // copy in the old object
                [selected]: newVoteCount, // set the selected anecdote to the amount of votes placed
            };
            console.log(newVotes);
            return newVotes;
        });
    };

    const findMostVotes = () => {
        let highestVoteCount = 0;
        let highestVotedIndex = -1;

        for (const [index, count] of Object.entries(votes)) {
            if (count > highestVoteCount) {
                highestVoteCount = count;
                highestVotedIndex = index;
            }
        }
        return highestVotedIndex;
    };

    const highestVotedIndex = findMostVotes();
    const highestVotedAnecdote =
        highestVotedIndex !== -1
            ? anecdotes[highestVotedIndex]
            : 'No votes yet';

    return (
        <div>
            <div>
                {anecdotes[selected]}
                <p>Votes: {votes[selected] || 0}</p>
                <button onClick={updateSelected}>Next Anecdote</button>
                <button onClick={updateVote}>Vote</button>
            </div>
            <div>
                <h2>Anecdote with most votes:</h2>
                <p>{highestVotedAnecdote}</p>
                <p>
                    Votes:
                    {highestVotedIndex !== -1 ? votes[highestVotedIndex] : 0}
                </p>
            </div>
        </div>
    );
};

export default App;
