import { useRef, useState } from "react"

export const Refs: React.FC = () => {
    const ref = useRef(0); // { current: 0 }
    // Com o useRef não é disparada uma rerenderização. Isso significa que, o valor da variável pode até ser modificado como em handleClickOnButton, porém, no HTML, não será exibido o novo valor cada vez que o valor for modificado.

    //Com esse useState, ao aperta no botão de Toggle, o valor da Ref acima será atualizado no HTML pois o useState aplica uma rerenderização dos componentes.
    const [toggle, setToggle] = useState(false);

    function handleClickOnButton() {
        ref.current = ref.current +1;
        console.log(ref.current);
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h1>useRef</h1>

            <p>{`O valor da ref é ${ref.current}`}</p>

            <br />
            <button onClick={handleClickOnButton}>Clique aqui</button>

            <br />
            {/* Pega o valor atual e inverte */}
            <button onClick={() => {setToggle(!toggle)}}>Toggle</button>
        </div>
    );
}
