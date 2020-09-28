import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import ExperienceCard from '../components/ExperienceCard';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {experiences: []};
    }

    componentDidMount() {
        fetch('http://localhost:8080/experiences', {
            method: 'GET'
        })
        .then(results => results.json())
        .then((arr) => {
            this.setState({ experiences: arr })
        })

    }

    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Experience</h1>
            <div>
            <Timeline lineColor={'#ddd'}>
            {
                this.state.experiences.map((exp) => {
                    return (
                        <ExperienceCard key={exp.ID+""} expNum={exp.ID} exp={exp}/>
                    )
                })
            }
            </Timeline>
            </div>

            <Widecard title="Software Developer Intern" where="Bombardier Aerospace" from="February 2014" to="May 2014"/>
            <br/>
            <h1 className="subtopic">Education</h1>
            <Widecard title="Bachelor of Software Engineering" where="ÉTS Montréal" from="2014" to="2018" link="https://www.etsmtl.ca"/>
            <Widecard title="Computer Science DEC" where="Champlain Regional College St-Lambert" from="2011" to="2014" link="https://www.champlainonline.com/champlainweb/"/>
            </div>
            )
        }
    }
    
export default Experience
    