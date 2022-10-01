import styles from './Timeline.module.css'

function TimelineItem(props) {
    return (
        <a href={`#${props.id}`} className={`${styles.Container} ${styles.Right} ${props.active ? styles.Active : ''}`}>
            <h2>{props.missionName}</h2>
            <p>{props.missionDate}</p>
        </a>
    )
}

export default TimelineItem