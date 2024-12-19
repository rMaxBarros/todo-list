import styles from './styles.module.scss';

export const StatsCard: React.FC = () => {
    return (
        <article className={styles.stats_card}>
            <h2>Total de Tarefas</h2>
            <span>5</span>
        </article>
    );
}