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
                        <li>Implement and modify features of a Java-based ETL platform to process big data 
                        of the capital markets industry leveraging Apache Spark, Hadoop, Impala and Hive.</li>

                        <li>Debug, maintain and improve Spring Boot microservices that handled queuing, metadata 
                        generation, data compression and autoscaling of the ETL jobs</li>
                        
                        <li>Participate in team rituals, communicate effectively in a multi-disciplinary team, support
                        and empower colleagues.</li>
                    </ul><br/>

                    <h4>Achievements</h4>
                    <ul className="highlight">
                        <li>Successfully delivered products and features to multiple clients</li>

                        <li>Contributed to shifting TickSmith from a project to product company by migrating legacy 
                        projects onto the generic platform and advocating for reusability and resiliency of modules</li>
                    
                        <li>Designed and built an orchestration module from the scratch in Python using Apache Airflow</li>
                        <br/>

                    </ul>
                </TimelineItem>
            </Timeline>

            <Widecard title="Software Developer" where="Noviflow" from="June 2018" to="February 2019"/>
            <Widecard title="Software Developer Intern" where="Autodesk" from="May 2017" to="August 2017"/>
            <Widecard title="Software Developer Intern" where="Autodesk" from="May 2016" to="August 2016"/>
            <Widecard title="Software Developer Intern" where="Ericsson" from="January 2015" to="April 2015"/>
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
    