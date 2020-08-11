import React, { Component } from 'react'
import { render } from '@testing-library/react';
import { TimelineItem } from 'vertical-timeline-component-for-react';

class ExperienceCard extends Component {
    render() {
        {
            var style
            var dateStyle
            if(this.props.key % 2 == 0){
                style = { color: '#e86971' }
            } else {
                style = { color: "#61b8ff"}
                dateStyle = { background: '#61b8ff', color: '#000' }
            }
        }
        return(
        <TimelineItem 
            key={this.props.key} 
            dateText={this.props.exp.Date} 
            style={{ color: '#e86971', width: '100%' }}
            bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            width: '100%'
        }}>
            <h3>{this.props.exp.Title}</h3><br/>
            <h4>Responsabilities</h4>
            <ul className="highlight">
            {
                this.props.exp.Responsabilities.split('\n').map((r) => {
                    return (
                        <li>{r}</li>
                    )
                })
            }
            </ul><br/>

            <h4>Achievements</h4>
            <ul className="highlight">
                {this.props.exp.Achievements.split('\n').map((a) => {
                    return (
                        <li>{a}</li>
                        )
                    })
                }
            </ul>
        </TimelineItem>

    
        )
    }
}

export default ExperienceCard