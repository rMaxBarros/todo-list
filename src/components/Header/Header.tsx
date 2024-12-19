import { StatsCard } from '../StatsCard/StatsCard';
import styles from './styles.module.scss';
// Importando assim, evita o conflito de tags entre diferentes componentes pois é um criado um identificador único para cada uso.

// Indicando que a constante Header é do tipo FC(Componente funcional)
// Tecnicamente não é necessário isso. É apenas para impedir que a função não retorne nada.
export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>My Todo</h1>
                    <span>Bem-vindo, Max!</span>
                </div>

                <div>
                    <StatsCard />
                    <StatsCard />
                    <StatsCard />
                </div>
            </div>
        </header>
    );
}
