import styles from './Navbar.module.css'

function ItemList(props) {
    
    return (
        <li className={`${styles.Item} ${props.active ? styles.Active : '' }`}>
            <a className={styles.ItemLink} href="#">{props.image ? <img className={styles.ImageLogo} src={props.image}/> : props.text}</a>
        </li>
    )
}

export default ItemList