import React, { Component } from 'react';

class SkillBar extends Component {

    getNewColor(rgbStr, opacity) {
      return rgbStr.split(')')[0] + "," + opacity + ")"
    }

    render() {
        return (
            <div className="SkillBar" style={{margin: `10px`, height: `64px`, background: `#eee`}}>
              <div
               style={{display: `inline-block`, width: `64px`, height:`inherit`, verticalAlign: `baseline`}}>
                <img src={this.props.icon} alt="icon"/>
              </div>
              <div
                className="skillbar-title"
                style={{
                  color: `${this.props.font || '#FFF'}`,
                  background: `${this.getNewColor(this.props.color || 'rgb(62,252,122)', 1)}`,
                  fontWeight: `600`,
                  width: `110px`,
                  height: `inherit`,
                  display: `inline-block`,
                  verticalAlign: `top`
                }}
              >
                <p style = {{
                  paddingLeft: `10px`,
                  verticalAlign: `middle`,
                  fontSize: `1em`
                }}>{this.props.name || ''}</p>
              </div>
              <div
                style={{
                  background: `${this.getNewColor(this.props.color || 'rgb(62,252,122)', (this.props.level || 0)/100)}`,
                  width: `calc((100% - 174px) * (${this.props.level || 0} * 0.01))`,
                  height: `inherit`,
                  transition: `width ${this.props.animationDuration}ms ease-in-out`,
                  display: `inline-block`
                }}>
              <div className="skillbar-percent" style={{float: `right`}}>{this.props.level}%</div>
              </div>
            </div>
        )
    }
}

export default SkillBar