import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import useTimelineService from "@curriculum/serverHandler/service/timelineService"
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css'
import { Experience, ExperienceDescription } from "@curriculum/serverHandler/models/experience";


const Timeline = () => {

    const { getCurriculumExperienceData } = useTimelineService();
    const [experiences, setExperiences] = useState([new Experience()]);

    useEffect(() => {
        getCurriculumExperienceData().then((response: Experience[]) => {
            setExperiences(response)
        })
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <VerticalTimeline className='no-margin'>
            {
                experiences.map((_experience: Experience) => (
                    _experience.items?.map((_item: ExperienceDescription) => (
                        <VerticalTimelineElement
                            contentStyle={{ background: '#fff', color: '#000' }}
                            contentArrowStyle={{ borderRight: '7px solid  #22a2c3' }}
                            date={_item.duration}
                            iconStyle={{ background: '#22a2c3', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">{_item.title}</h3>
                            <span className="vertical-timeline-element-subtitle">{_item.location}</span>

                            {
                                _item.highlights?.slice(0, 2).map(_highlight => (
                                    <p>
                                        {_highlight}
                                    </p>
                                ))
                            }
                        </VerticalTimelineElement >
                    ))
                ))
            }
            <VerticalTimelineElement iconStyle={{ background: '#22a2c3', color: '#fff' }}/>

        </VerticalTimeline>
    )
};

export default Timeline;
