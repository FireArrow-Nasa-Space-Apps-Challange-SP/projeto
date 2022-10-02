import ItemList from './ItemList'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.LinkList}>
                <ItemList text='Home' />
                <ItemList image={process.env.PUBLIC_URL + 'nasa-logo-web-rgb.png'} />
                <ItemList text='About Us' />
            </ul>
        </nav>
    )
}

export default Navbar