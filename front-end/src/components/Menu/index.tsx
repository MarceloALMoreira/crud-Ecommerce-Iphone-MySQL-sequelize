import logo from '../../assets/iphone/logo.png'
import styles from './Menu.module.scss'
const Menu = () => {
    return (
        <div className={styles.menu}>
            <img className={styles.logo} src={logo} alt="" />
            <ul>
                <li>Mac</li>
                <li>iPhone</li>
                <li>iPad</li>
                <li>Watch</li>
                <li>AirPods</li>
                <li>Acessórios</li>
                <li>Suporte</li>
            </ul>
        </div >
    )
}

export default Menu