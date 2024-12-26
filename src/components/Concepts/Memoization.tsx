import { useCallback, useMemo, useState } from "react";

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

    // Exemplo simples para uso do useCallback
    // useCallback: evitar que a função seja recriada - ela só depende dos parâmetros que são passados em sua criação. Se tiver parâmetros externos, ela vai precisar ser recriada quando o parâmetro externo mudar. E será recriada APENAS e SEMPRE quando isso acontecer.
    const aplicarDesconto = useCallback((desconto: number) => {
        return Number(totalOutcomes) * (1 - desconto);
    }, [totalOutcomes]); // Passa o valor externo para que a função seja recriada toda vez que o parâmetro seja atualizado.

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

// useMemo: usado quando quer memorizar o que a função faz.
// useCallback: usado quando quer memorizar a definição da função. (Ele evita que ela seja recriada) useMemo é mais usado e bem melhor.