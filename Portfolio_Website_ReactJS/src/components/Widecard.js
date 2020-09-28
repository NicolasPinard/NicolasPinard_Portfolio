import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return (
            <div className="widecard">
                <div className="compdet">
                    <div className="widecardelement">{this.props.title} at {this.props.link != null && <a href={this.props.link} className="widecardlink">{this.props.where}</a>}</div>
                    <div className="secondtext">{this.props.from} - {this.props.to}</div>
                </div>
            </div>
        )
    }
}

Widecard.defaultProps = {
    title: "<Title>",
    where: "<Where>",
    from: "<From>",
    to: "",
    link: null
}

export default Widecard
    