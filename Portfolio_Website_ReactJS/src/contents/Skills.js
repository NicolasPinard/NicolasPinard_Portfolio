import React, { Component } from 'react'
import SkillBar from '../components/SkillBar';
import javalogo from '../img/java.png';
import pythonlogo from '../img/python.png'
import sqllogo from '../img/sql.png'
import bashlogo from '../img/Bash.png'
import javascriptlogo from '../img/javascript.png'
import clogo from '../img/C.png'
import csharplogo from '../img/csharp.png'
import gologo from '../img/Go.png'
import scalalogo from '../img/Scala.png'
import awslogo from '../img/AWS.png'
import sparklogo from '../img/Spark.png'
import airflowlogo from '../img/Airflow.png'
import springlogo from '../img/Spring.png'
import reactlogo from '../img/react.png'
import dockerlogo from '../img/Docker.png'
import hadooplogo from '../img/Hadoop.png'
import impalalogo from '../img/Impala.png'
import hivelogo from '../img/Hive.png'


class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'languages':['Java','Python','SQL','Bash','JavaScript','C','C#','Go','Scala','Terraform'],
            'frameworks': ['AWS','Spark','Airflow','Spring','React','Docker','Hadoop','Impala','Hive']
        };

        this.state.languages = [
            {'name': 'Java', 'color': 'rgb(219,56,14)', 'fontcolor': '', 'level': 90, 'icon': javalogo},
            {'name': 'Python', 'color': 'rgb(252,216,73)', 'fontcolor': '', 'level': 85, 'icon': pythonlogo},
            {'name': 'SQL', 'color': 'rgb(3,118,171)', 'fontcolor': '', 'level': 70, 'icon': sqllogo},
            {'name': 'Bash', 'color': 'rgb(3,3,3)', 'fontcolor': '', 'level': 70, 'icon': bashlogo},
            {'name': 'JavaScript', 'color': 'rgb(214,191,3)', 'fontcolor': '', 'level': 60, 'icon': javascriptlogo},
            {'name': 'C', 'color': 'rgb(3,89,156)', 'fontcolor': '', 'level': 60, 'icon': clogo},
            {'name': 'C#', 'color': 'rgb(126,53,134)', 'fontcolor': '', 'level': 50, 'icon': csharplogo},
            {'name': 'Go', 'color': 'rgb(0,174,212)', 'fontcolor': '', 'level': 30, 'icon': gologo},
            {'name': 'Scala', 'color': 'rgb(225,0,0)', 'fontcolor': '', 'level': 30, 'icon': scalalogo}
        ]
        this.state.frameworks = [
            {'name': 'AWS', 'color': 'rgb(254,154,4)', 'fontcolor': '', 'level': 95, 'icon': awslogo},
            {'name': 'Spark', 'color': 'rgb(226,90,28)', 'fontcolor': '', 'level': 85, 'icon': sparklogo},
            {'name': 'Airflow', 'color': 'rgb(0,122,134)', 'fontcolor': '', 'level': 85, 'icon': airflowlogo},
            {'name': 'Spring', 'color': 'rgb(119,188,31)', 'fontcolor': '', 'level': 65, 'icon': springlogo},
            {'name': 'React', 'color': 'rgb(6,188,217)', 'fontcolor': '', 'level': 50, 'icon': reactlogo},
            {'name': 'Docker', 'color': 'rgb(58,140,180)', 'fontcolor': '', 'level': 70, 'icon': dockerlogo},
            {'name': 'Hadoop', 'color': 'rgb(255,255,0)', 'fontcolor': '#000', 'level': 50, 'icon': hadooplogo},
            {'name': 'Impala', 'color': 'rgb(36,101,144)', 'fontcolor': '', 'level': 30, 'icon': impalalogo},
            {'name': 'Hive', 'color': 'rgb(253,238,33)', 'fontcolor': '#000', 'level': 30, 'icon': hivelogo}
        ]
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <h3>Programming languages</h3>
            <div>
            {this.state.languages.map((lang)=>{
                return <SkillBar name={lang.name} color={lang.color} font={lang.fontcolor} level={lang.level} icon={lang.icon} animationDuration={10000}></SkillBar>
            })}
            </div>
            <br/>
            <h3>Other technologies</h3>
            <ul>
            {this.state.frameworks.map((framework)=>{
                return <SkillBar name={framework.name} color={framework.color} font={framework.fontcolor} level={framework.level} icon={framework.icon}></SkillBar>
            })}
            </ul>
            {/* <a href="https://iconscout.com/icons/scala" target="_blank">Scala Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">Iconscout</a>
            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
            </div>
            )
        }
    }
    
    export default Skills
    