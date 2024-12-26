
interface MemoizationProps {
    financialData: {
        incomes: number[],
        outcomes: number[],
    }
}

export const Memoization: React.FC<MemoizationProps> = ({financialData}) => {
    const totalIncomes = financialData.incomes.reduce((total, income) => {
        return total += income
    }, 0); // Valor inicial

    const totalOutcomes = financialData.outcomes.reduce((total, outcome) => {
        return total += outcome
    }, 0);

    return (
        <div style={{ padding: "2rem"}}>
            <h1>Memoization</h1>

            <h2>useMemo</h2>

            <p>{`Total de Receitas R$ ${totalIncomes}`}</p>
            <br />
            <p>{`Total de Despesas R$ ${totalOutcomes}`}</p>
        </div>
    )
}