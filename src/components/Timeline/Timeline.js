import styles from './Timeline.module.css'
import TimelineItem from './TimelineItem'

function Timeline() {
    return (
        <div className={styles.Timeline}>
            <TimelineItem active={true} missionName="Satélite Terra" missionDate="28/02/2003" />
            <TimelineItem missionName="Satélite Água" missionDate="30/04/2015" />
            <TimelineItem missionName="Satélite Fogo" missionDate="28/02/2003" />
            <TimelineItem missionName="Satélite Ar" missionDate="28/02/2003" />
        </div>
    )
}

export default Timeline