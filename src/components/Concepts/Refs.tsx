import { useEffect, useRef, useState } from "react"

export const Refs: React.FC = () => {
    const inputRef = useRef(null); // { current: null }

    // Pegar a mudança do useRef com o input.
    // Toda vez que o inputRef mudar, dá um console.log mostrando o que tem dentro dele.
    useEffect(() => {
        console.log(inputRef);
    }, [inputRef]);             // Pega a referência de nulo para: { current: input }

    return (
        <div style={{ padding: '2rem' }}>
            <h1>useRef</h1>

            <br />
            {/* Com a propriedade ref, ele pega o valor dela e joga dentro do current
            Ele pega todas as propriedades que existem dentro do HTML Vanila, para dentro do react. */}
            <input type="text" placeholder="Nome Completo" ref={inputRef} />

            <br />
            <button>Clique aqui</button>
        </div>
    );
}
