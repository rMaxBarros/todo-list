import { useEffect, useRef, useState } from "react"

export const Refs: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null); // { current: null }
                        // Atribuição do tipo da Ref.

                        
    // Poderia colocar addEventListener etc aqui. É como voltar a usar o JavaScript Valina dentro do React.
    // Ao clicar no botão, o foco fica no input piscando.
    function handleClickOnButton() {
        if (inputRef.current){
            inputRef.current.focus();
        }
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h1>useRef</h1>

            <br />
            <input type="text" placeholder="Nome Completo" ref={inputRef} />

            <br />
            <button onClick={handleClickOnButton}>Foque no Input</button>
        </div>
    );
}
