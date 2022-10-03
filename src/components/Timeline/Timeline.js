import { useEffect, useState } from 'react';
import styles from './Timeline.module.css'
import TimelineItem from './TimelineItem'

function Timeline() {
    const [currentSectionId, setCurrentSectionId] = useState(false);
    const [currentHash, setCurrentHash] = useState(false)
    // const history = useHistory();

    function verifyAndScrollSetCurrentSectionId(newId){
        if(newId !== currentSectionId){
            setCurrentSectionId(newId)
            // const sectionOffset = getSectionOffsetById(currentSectionId)

            // if (sectionOffset){
            //     console.log(newId, currentSectionId)
            //     window.scrollTo({'top': sectionOffset.top})
            // }
        }
    }

    const getAllSections = () => {
        return [
            getSectionOffsetById('sectionMain'),
            getSectionOffsetById('sectionLandSat7'),
            getSectionOffsetById('sectionTerra'),
            getSectionOffsetById('sectionAqua'),
            getSectionOffsetById('sectionAura')
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
        const scrollTop = document.documentElement.scrollTop + 800
        const sectionOffsets = getAllSections()

        const currentSectionOffset = sectionOffsets.find(sectionOffset => {
            if(window.location.hash && currentHash !== window.location.hash){
                setCurrentHash(window.location.hash)
                return window.location.hash.substr(1) === sectionOffset.id
            }else {
                return scrollTop > sectionOffset.top && scrollTop < sectionOffset.bottom
            }
        })

        if(currentSectionOffset){
            verifyAndScrollSetCurrentSectionId(currentSectionOffset.id)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollListener)

        return () => window.removeEventListener('scroll', scrollListener)
    })

    const sections = [
        {name:"LandSat7", date: "15/04/99", id: 'sectionLandSat7'},
        {name:"Terra", date: "18/12/99", id: 'sectionTerra'},
        {name:"Aqua", date: "4/05/02", id: 'sectionAqua'},
        {name:"Aura", date: "15/07/04", id: 'sectionAura'}
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