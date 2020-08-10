import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return (
            <div className="widecard">
                <div className="compdet">
                    <div className="widecardelement">{this.props.title} at {this.props.where}</div> <div className="secondtext">{this.props.from} - {this.props.to}</div>
                </div>
            </div>
            )
        }
    }
    
export default Widecard
    