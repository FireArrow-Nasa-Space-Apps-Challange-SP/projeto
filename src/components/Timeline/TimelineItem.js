import styles from './Timeline.module.css'

function TimelineItem(props) {
    return (
        <div className={`${styles.Container} ${styles.Right} ${props.active ? styles.Active : ''}`}>
            <h2>{props.missionName}</h2>
            <p>{props.missionDate}</p>
        </div>
    )
}

export default TimelineItem