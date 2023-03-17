import styles from './iPhone.module.scss'
import phone from '../../assets/iphone/iphone-azul.png'
import { useState } from 'react'

function Phone() {

    return (
        <div className={styles.caixa_azul}>



            <div className="">
                <h1 className={styles.title_iphone}>iPhone 14</h1>
                <h2 className={styles.title_markt}>Tão poderoso . Tão ao seu alcance.</h2>

                <p className=''>Em dois Tamanhos perfeitos. Agora com um toque de amrelo.</p>

                <h3 className={styles.preco}>A partir de R$ 633,25/mês ou R$ 7.599</h3>

                <button className={styles.botao}>Comprar</button>

                <p className={styles.select_color}>Escolha sua cor:</p>

                <div className=''>
                    <button className={`${styles.update_color} ${styles.azul}`}></button>
                    <button className={`${styles.update_color} ${styles.amarelo}`}></button>
                    <button className={`${styles.update_color} ${styles.branco}`}></button>
                    <button className={`${styles.update_color} ${styles.preto}`}></button>
                    <button className={`${styles.update_color} ${styles.vermelho}`}></button>
                    <button className={`${styles.update_color} ${styles.roxo}`}></button>
                </div>
            </div>
            <div className={styles.circle}></div>
            <img src={phone} alt="" />
        </div >
    )
}

export default Phone