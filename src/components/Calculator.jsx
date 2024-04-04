import {Link} from 'react-router-dom'
import { useCalculator } from '../context/CalculatorContext'
import { useState } from 'react';
function Calculator () {
    const { addNumbers, numbers, addingNumbers, reset } = useCalculator();
    const [selected, setSelected] = useState(false);

    const handleCalculate = (n) => {
        addNumbers(n)
        setSelected(!selected)
    }
    const buttons = [0,1,2,3,4,5,6,7,8,9]
    return (
        <div className='calculator'>
            <h1>Calculator</h1>
            <h2>{numbers.join(' + ')}</h2>
            <div className='buttons'>
                {buttons.map((number) => (
                    <button style={selected ? {border: '2px, solid, tomato'} : {border: 'none'}} value={number} key={number} onMouseOut={() => setSelected(!selected)} onClick={() => handleCalculate(number)}>
                        {number}
                    </button>
                    ))}
                <button className='resetBtn' onClick={reset}>Reset</button>
            </div>
            <Link className='links' onClick={() => addingNumbers()} to='/result'>Result</Link>
        </div>
    )
};

export default Calculator;