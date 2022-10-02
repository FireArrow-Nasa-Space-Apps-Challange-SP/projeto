import { useEffect, useState, useHistory } from 'react';
import styles from './Timeline.module.css'
import TimelineItem from './TimelineItem'

function Timeline() {
    const [currentSectionId, setCurrentSectionId] = useState(false);
    // const history = useHistory();

    const getAllSections = () => {
        return [
            getSectionOffsetById('section1'),
            getSectionOffsetById('section2'),
            getSectionOffsetById('section3'),
            getSectionOffsetById('section4'),
            getSectionOffsetById('section5'),
            getSectionOffsetById('section6'),
            getSectionOffsetById('section7'),
        ]
    }

    const getSectionOffsetById = id => {
        const section = document.getElementById(id)
        if(!section){
            return {}
        }

        const offsetTop = section.offsetTop
        const height = section.offsetHeight
        const offsetBottom = offsetTop + height

        return {
            'id': id,
            'top': offsetTop,
            'bottom': offsetBottom,
            'height': height,
        }

    }

    const scrollListener = () => {
        const scrollTop = document.documentElement.scrollTop + 50
        const sectionOffsets = getAllSections()

        const currentSectionOffset = sectionOffsets.find(sectionOffset => {
            const anchor = window.location.hash.substr(1)
            if(anchor){
            //    history.pushState({}, null, window.location.href.replace(window.location.hash, ''));
            }
            return window.location.hash.substr(1) === sectionOffset.id || (scrollTop > sectionOffset.top && scrollTop < sectionOffset.bottom)
        })

        setCurrentSectionId(currentSectionOffset.id)
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollListener)

        return () => window.removeEventListener('scroll', scrollListener)
    })

    const sections = [
        {name:"LandSat7", date: "15/04/99", id: 'section1'},
        {name:"Terra", date: "18/12/99", id: 'section2'},
        {name:"Aqua", date: "4/05/02", id: 'section3'},
        {name:"Aura", date: "28/02/2003", id: 'section4'},
        {name:"CloudSat", date: "28/02/2003", id: 'section5'},
        {name:"Calipso", date: "28/02/2003", id: 'section6'},
    ]

    return (
        <div className={styles.Timeline}>
            {
                sections.map(section => {
                    return <TimelineItem funcionRedirect={section.functionRedirect} id={section.id} active={section.id === currentSectionId} missionName={section.name} missionDate={section.date} /> 
                })
            }
        </div>
    )
}

export default Timeline