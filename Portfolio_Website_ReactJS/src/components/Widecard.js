import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return (
            <div class="widecard">
                <div class="compdet">
                    <div class="widecardelement">{this.props.title} at {this.props.where}</div> <div class="secondtext">{this.props.from} - {this.props.to}</div>
                </div>
            </div>
            )
        }
    }
    
export default Widecard
    