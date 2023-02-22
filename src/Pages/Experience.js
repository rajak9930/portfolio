import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWork } from "react-icons/md";
import "react-vertical-timeline-component/style.min.css";
import { IoIosSchool } from "react-icons/io";
import '../Style/Experience.css';
import {UrlTitle} from '../Service/UrlTitle'
const Experience = () => {
    UrlTitle(`Experience | portfolio`)
    return (
        <>
            <div className="experience">
                <VerticalTimeline lineColor='#3e497a'>
                    <VerticalTimelineElement className='vertical-timeline-element--education' date="2013" iconStyle={{ background: "#3e497a", color: '#fff' }} icon={<IoIosSchool />}>
                        <h3 className='vertical-timeline-element-title'>10th</h3>
                        <p className=''>BBM High School Purnia</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element--education' date="2013-2015" iconStyle={{ background: "#3e497a", color: '#fff' }} icon={<IoIosSchool />}>
                        <h3 className='vertical-timeline-element-title'>12th</h3>
                        <p className=''>B M College Barari,katihar</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element--education' date="July `2016 - Sept`2019" iconStyle={{ background: "#3e497a", color: '#fff' }} icon={<IoIosSchool />}>
                        <h3 className='vertical-timeline-element-title'>BACHELORS IN COMPUTER APPLICATION
                        </h3>
                        <p className=''>Purnia College, Purnia</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element--education' date="Oct`2020 - May `2022

" iconStyle={{ background: "#3e497a", color: '#fff' }} icon={<IoIosSchool />}>
                        <h3 className='vertical-timeline-element-title'>MASTERS IN COMPUTER APPLICATION
                        </h3>
                        <p className=''>SRM University</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element--education' date="May 2021 - Jun 2021" iconStyle={{ background: "#3e497a", color: '#fff' }} icon={<MdWork />}>
                        <h3 className='vertical-timeline-element-title'>Web Developer
                        </h3>
                        <p className=''>Exposys Data Labs · Internship</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element--education' date="Dec 2021 - Apr 2022" iconStyle={{ background: "#3e497a", color: '#fff' }} icon={<MdWork />}>
                        <h3 className='vertical-timeline-element-title'>React Developer
                        </h3>
                        <p className=''>Magnox Technologies Private Limited · Internship</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element--education' date="May 2022 - Aug 2022" iconStyle={{ background: "#3e497a", color: '#fff' }} icon={<MdWork />}>
                        <h3 className='vertical-timeline-element-title'>React Developer
                        </h3>
                        <p className=''>ToXSL Technologies Pvt Ltd · Apprenticeship</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement className='vertical-timeline-element--education' date="Oct 2022 - Nov 2022" iconStyle={{ background: "#3e497a", color: '#fff' }} icon={<MdWork />}>
                        <h3 className='vertical-timeline-element-title'>React Developer
                        </h3>
                        <p className=''>Sogrow Ventures Private Limited · Full-time</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Experience;
