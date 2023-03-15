import styles from './iPhone.module.scss'
const Phone = () => {

    return (
        <section>
            <h1>iPhone 14</h1>

            <h2>Tão poderoso . Tão ao seu alcance.</h2>

            <p>Em dois Tamanhos perfeitos. Agora com um toque de amrelo.</p>

            <h3>A partir de R$ 633,25/mês ou R$ 7.599</h3>

            <button>Comprar</button>

            <div className={styles.escolherCores}>
                <p>Escolha sua cor:</p>
            </div>



        </section>
    )
}
export default Phone