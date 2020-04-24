import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'languages':['Java','Python','SQL','JavaScript','C','Go','Scala','C#','Terraform'],
            'frameworks': ['AWS','Spark','Airflow','Hadoop','Impala','Hive']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <h3>Programming languages</h3>
            <ul>
            {this.state.languages.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            <h3>Other technologies</h3>
            <ul>
            {this.state.frameworks.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    