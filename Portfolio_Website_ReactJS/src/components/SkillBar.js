import React, { Component } from 'react';

class SkillBar extends Component {

    getNewColor(rgbStr, opacity) {
      return rgbStr.split(')')[0] + "," + opacity + ")"
    }

    render() {
        return (
            <div className="skillbar">
              <div
               className="skillbar-icon">
                <img src={this.props.icon} alt="icon"/>
              </div>
              <div
                className="skillbar-title"
                style={{
                  color: `${this.props.font || '#FFF'}`,
                  background: `${this.getNewColor(this.props.color || 'rgb(62,252,122)', 1)}`
                }}
              >
                <p className="skillbar-title-content">{this.props.name || ''}</p>
              </div>
              <div
                className="skillbar-bar"
                style={{
                  background: `${this.getNewColor(this.props.color || 'rgb(62,252,122)', (this.props.level || 0)/100)}`,
                  width: `calc((100% - 174px) * (${this.props.level || 0} * 0.01))`,
                  transition: `width ${this.props.animationDuration}ms ease-in-out`
                }}>
              </div>
            </div>
        )
    }
}

export default SkillBar