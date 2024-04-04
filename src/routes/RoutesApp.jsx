import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Result from '../components/Result';
import Calculator from '../components/Calculator';

function RoutesApp () {
return (
    <Router>
        <div className='App'>
            <Routes>
                <Route path='/' element={<Calculator />}/>
                <Route path='/result' element={<Result />}/>
            </Routes>
        </div>
    </Router>
    )
}

export default RoutesApp;