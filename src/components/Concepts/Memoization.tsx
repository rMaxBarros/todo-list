import { useMemo, useState } from "react";

interface MemoizationProps {
    financialData: {
        incomes: number[],
        outcomes: number[],
    }
}
// Usado em componentes com muitas propriedades/estados com cálculos que são exibidos no código.
export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {
    // Estado que define se os valores devem ser mostrados ou não.
    const [showValues, setShowValues] = useState(true);

    // useMemo evita que toda vez que o componente sofra uma alteração que não seja específica da função do useMemo, ele recarregue tudo que tenha lá. 
    // Para deixar mais claro: Ao clicar no botão de Mostrar/Ocultar valores, o reduce do icomes/outcomes não será totalmente recarregada, o valor já estará salvo e só será rerenderizado se for necessário.
    const totalIncomes = useMemo(() => {
        financialData.incomes.reduce((total, income) => {
            console.log('Calculando o total de receitas...');
            return total += income
        }, 0); // Valor inicial
    }, [financialData.incomes]); // Define a dependência que pode alterar o valor do totalIcomes.

    const totalOutcomes = useMemo(() => {
        financialData.outcomes.reduce((total, outcome) => {
            console.log('Calculando o total de despesas...');
            return total += outcome
        }, 0);
    }, [financialData.outcomes]);

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
                {showValues ? 'Ocultar valores' : 'Mostrar valores'}
            </button>
        </div>
    )
}