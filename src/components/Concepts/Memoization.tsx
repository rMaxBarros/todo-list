import { useState } from "react";

interface MemoizationProps {
    financialData: {
        incomes: number[],
        outcomes: number[],
    }
}

export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {
    // Estado que define se os valores devem ser mostrados ou não.
    const [showValues, setShowValues] = useState(true);

    const totalIncomes = financialData.incomes.reduce((total, income) => {
        return total += income
    }, 0); // Valor inicial

    const totalOutcomes = financialData.outcomes.reduce((total, outcome) => {
        return total += outcome
    }, 0);

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Memoization</h1>

            <h2>useMemo</h2>

            <p>{`Total de Receitas R$ ${showValues ? totalIncomes : 'XXXXX'}`}</p>
            <br />
            <p>{`Total de Despesas R$ ${showValues ? totalOutcomes : 'XXXXX'}`}</p>

            <br />
            <br />
            <button onClick={() => setShowValues(!showValues)}>
                { showValues ? 'Ocultar valores' : 'Mostrar valores'}
            </button>
        </div>
    )
}