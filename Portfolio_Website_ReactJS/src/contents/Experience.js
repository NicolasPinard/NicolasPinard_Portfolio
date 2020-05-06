import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class Experience extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Experience</h1>
            <Timeline lineColor={'#ddd'}>
                <TimelineItem 
                        key="001" 
                        dateText="February 2019 -" 
                        style={{ color: '#e86971', width: '100%' }}
                        bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        width: '100%'
                        }}>
                    <h3>Full Stack Developer at TickSmith Corp</h3><br/>
                    <h4>Responsabilities</h4>
                    <ul className="highlight">
                        <li>Implement and modify features of a Java-based in-house ETL cloud platform to process 
                        big data of the capital markets industry leveraging technoogies such as Apache Spark, 
                        Hadoop, Impala and Hive.</li>

                        <li>Debug, maintain and improve Spring Boot microservices and APIs handling queuing, 
                        metadata generation, data compression and autoscaling of the ETL jobs</li>
                        
                        <li>Participate in team rituals, communicate effectively in a multi-disciplinary team, 
                        support and empower colleagues.</li>
                    </ul><br/>

                    <h4>Achievements</h4>
                    <ul className="highlight">
                        <li>Successfully delivered key products and features to multiple clients</li>

                        <li>Contributed to shifting TickSmith from a project to product company by migrating legacy 
                        projects onto the generic platform and advocating for the reusability and resiliency of modules</li>

                        <li>Suggested process improvements and advocated for integration tests and better resiliency of the
                        modules which improved the team's efficiency</li>
                    
                        <li>Designed and built an orchestration module from the scratch in Python using Apache Airflow</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="June 2018 - February 2019"
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    style={{ color: "#61b8ff"}}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    width: '100%'}}>
                    <h3>Software Developer at Noviflow</h3><br/>
                    <h4>Responsabilities</h4>
                    <ul className="highlight">
                        <li>Design and refactor functionalities in C on a Linux environment</li>
                        <li>Automate redundant tasks with Bash/Python scripts</li>
                        <li>Created Python unit tests simulating network traffic</li>
                    </ul><br/>

                    <h4>Achievements</h4>
                    <ul className="highlight">
                        <li>Quickly adapted to embedded development in C which I wasn't familiar with</li>
                        <li>Reproduced and handled support issues in a timely manner</li>
                        <li>Identified and patched system vulnerabilities</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="003"
                    dateText="May 2017 - August 2017"
                    style={{ color: '#e86971', width: '100%' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        width: '100%'
                    }}>
                    <h3>Software Developer Intern at Autodesk (Shotgun)</h3><br/>
                    <ul className="highlight">
                        <li>Quickly familiarized myself with a large tech stack and its various use cases</li>
                        <li>Developed an extensible and portable test automation framework to give the ability 
                        to cover all the edge cases</li>
                        <li>Gathered feedback from stakeholders and adapted my design accordingly</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText="May 2016 - August 2016"
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    style={{ color: "#61b8ff"}}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    width: '100%'}}>
                    <h3>Software Developer Intern at Autodesk (Stingray)</h3><br/>
                    <ul className="highlight">
                        <li>Wrote test automation scripts to run the graphic engine on the Android devices</li>
                        <li>Collaborated with another intern to extract insights from APIs and build logs to 
                        power CI/CD dashboards.</li>
                        <li>Showed initiative and worked with a minimal of supervision</li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    key="005"
                    dateText="January 2015 - April 2015"
                    style={{ color: '#e86971', width: '100%' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        width: '100%'
                    }}>
                    <h3>Software Developer Intern at Ericsson</h3><br/>
                    <ul className="highlight">
                        <li>Along with a team of 5 interns and a senior developer, we refactored a test
                        automation framework in Python</li>
                        <li>Automated manual testing operations with Python scripts</li>
                        <li>Worked in an agile team, where rituals included sprint planning, daily standup, 
                        backlog grooming, sprint review and retrospective.</li>
                    </ul>

                </TimelineItem>

            </Timeline>

            <Widecard title="Software Developer Intern" where="Bombardier Aerospace" from="February 2014" to="May 2014"/>
            <br/>
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Bachelor of Software Engineering" where="ÉTS Montréal" from="2014" to="2018"/>
            <Widecard title="Computer Science DEC" where="Champlain Regional College St-Lambert" from="2011" to="2014"/>
            </div>
            )
        }
    }
    
export default Experience
    