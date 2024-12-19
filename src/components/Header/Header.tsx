import styles from './styles.module.css';
// Importando assim, evita o conflito de tags entre diferentes componentes pois é um criado um identificador único para cada uso.

// Indicando que a constante Header é do tipo FC(Componente funcional)
// Tecnicamente não é necessário isso. É apenas para impedir que a função não retorne nada.
export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div>
                <h1>My Todo</h1>
                <span>Bem-vindo, Max!</span>
            </div>

            <div>
                {/* cards */}
            </div>
        </header>
    );
}
