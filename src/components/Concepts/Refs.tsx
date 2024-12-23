import { FormEvent, useEffect, useRef, useState } from "react"

export const Refs: React.FC = () => {
    const inputNameRef = useRef<HTMLInputElement>(null); // { current: null }
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    function handleOnSubmit(event: FormEvent) {
        event.preventDefault(); // Evita que a página seja recarregada ao submeter ao formulário
        //Uncontrolled input: input não controlado. Sem o uso de useState. Pega o valor completo apenas no final da digitação.
        console.log(inputNameRef.current?.value);
        console.log(inputEmailRef.current?.value);
        console.log(inputPasswordRef.current?.value);
    }

    // read-hook-form: biblioteca que lida com o useRef para formulários.

    return ( // Quando o formulário é submetido, chama a função no onSubmit passando o evento
        <form style={{ padding: '2rem' }} onSubmit={(event) => handleOnSubmit(event)}>
            <h1>useRef</h1>

            <br />
            <input type="text" placeholder="Nome Completo" ref={inputNameRef} />
            <input type="email" placeholder="email" ref={inputEmailRef} />
            <input type="password" placeholder="Senha" ref={inputPasswordRef} />

            <br />
            <button type="submit">Submeter</button>
        </form>
    );
}
