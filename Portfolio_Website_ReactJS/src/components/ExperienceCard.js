import React, { Component } from 'react'
import { TimelineItem } from 'vertical-timeline-component-for-react';

class ExperienceCard extends Component {
    render() {
        {
            var color
            var dateStyle
            if(this.props.expNum % 2 == 0){
                color = { color: '#e86971' }
            } else {
                color = { color: "#61b8ff"}
                dateStyle = { background: '#61b8ff', color: '#000' }
            }
            var counter = 0
        }
        return(
        <TimelineItem 
            key={this.props.expNum} 
            dateText={this.props.exp.Date} 
            dateInnerStyle={dateStyle}
            style={{color}}
            bodyContainerStyle={getBodyStyle()}
        >
            <h3>{this.props.exp.Title}</h3><br/>
            <h4>Responsibilities</h4>
            <ul className="highlight">
            {
                this.props.exp.Responsibilities.split('\n').map((resp) => {
                    return (
                        <li key = {(counter++) + ""}>{resp}</li>
                    )
                })
            }
            </ul><br/>

            <h4>Achievements</h4>
            <ul className="highlight">
                {this.props.exp.Achievements.split('\n').map((achieve) => {
                    return (
                        <li key = {(counter++) + ""}>{achieve}</li>
                        )
                    })
                }
            </ul>
        </TimelineItem>

    
        )
    }
}

function getBodyStyle() {
    var style = {
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        width: '100%'
    }
    return style
}

export default ExperienceCard