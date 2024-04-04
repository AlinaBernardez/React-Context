import './App.css';
import RoutesApp from './routes/RoutesApp';
import { CalculatorProvider } from './context/CalculatorContext';

function App() {
  return (
    <CalculatorProvider>
      <RoutesApp />
    </CalculatorProvider>
  )
}

export default App;
