import { useState } from 'react';
import './App.css';

const App = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [age, setAge] = useState('');

    const calculateAge = (dateOfBirth) => {
        const ageDiff = Date.now() - dateOfBirth.getTime();
        const age = new Date(ageDiff);
        return Math.abs(age.getUTCFullYear() - 1970);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const dateOfBirth = new Date(year, month - 1, day); // month is 0 indexed
        setAge(calculateAge(dateOfBirth));
        
        // Clear all the inputs
        setDay("");
        setYear("");
        setMonth("");
    };

    return (
        <div className="homepage">
            <h1>Age calculator</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Day:</span>
                    <input
                        type="number"
                        min="1"
                        max="31"
                        placeholder="Enter your birth day"
                        value={day}
                        onChange={(inputDay) => {
                            setDay(inputDay.target.value);
                        }}
                    />
                </label>
                <label>
                    <span>Month:</span>
                    <input
                        type="number"
                        placeholder="Enter your birth month(1-12)"
                        max="12"
                        min="1"
                        value={month}
                        onChange={(inputMonth) => {
                            setMonth(inputMonth.target.value);
                        }}
                    />
                </label>
                <label>
                    <span>Year:</span>
                    <input
                        type="number"
                        min="1900"
                        max="2022"
                        placeholder="Enter your birth year"
                        value={year}
                        onChange={(inputYear) => {
                            setYear(inputYear.target.value);
                        }}
                    />
                </label>
                <button>Submit</button>
                <div>
                    <p>Your current age is: {age}</p>
                </div>
            </form>
        </div>
    );
};

export default App;
