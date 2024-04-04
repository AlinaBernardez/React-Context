import {Link} from 'react-router-dom'
import { useCalculator } from '../context/CalculatorContext';

function Result () {
    const {numbers, result, reset} = useCalculator();


    return (
        <div className='calculator'>
            <h1>Result</h1>
            <h3>{numbers.join( '+' )}</h3>
            <h2 className='result'>{result}</h2>
            <button className='resetBtn' onClick={reset}>Reset</button>
            <Link className='resultLink' to='/'>Calculator</Link>
        </div>
    )
};

export default Result;