import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [numbers, setNumbers] = useState([]);
    const [result, setResult] = useState(0);

    const addNumbers = (newNumber) => {
        setNumbers([...numbers, newNumber])
    }
    
    const addingNumbers = () => {
        const suma = numbers.reduce((prev, next) =>  prev + next)
        setResult(parseInt(suma))
    }

    const reset = () => {
        setNumbers([])
        setResult(0)
    }

    return (
        <CalculatorContext.Provider value={{numbers, addNumbers, addingNumbers, result, reset}}>
            {children}
        </CalculatorContext.Provider>
    )
}

export const useCalculator = () => useContext(CalculatorContext);