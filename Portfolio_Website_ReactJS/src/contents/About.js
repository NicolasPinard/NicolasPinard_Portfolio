import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <h2>I'm Nicolas Pinard</h2>
                <h3>Full Stack Developer | Data Engineer</h3>
                <br/>
                <h3>Below is a timeline of various events and key moments of my career from the time I learned programming all the way to now!</h3>

                <Timeline lineColor={'#ddd'}>
                    <TimelineItem 
                    key="001" 
                    dateText="2011" 
                    style={{ color: '#e86971' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
                    }}>
                        <h4>First steps into the world of programming</h4>
                        <p>I started coding in 2011, I didn't know what Java was other than that thing that you always 
                        need to update on your computer. At that point, I really struggled to understand the concepts of 
                        programming so I was considering giving up and changing field. However, my parents and my friend 
                        encouraged me to give it another shot and I'm so glad they did, because since then I have never 
                        looked back.</p>
                    </TimelineItem>
                    <TimelineItem 
                    key="002" 
                    dateText="2012 – 2013" 
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    style={{ color: "#61b8ff"}}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'}}>
                        <h4>Slowly moving away from survival mode</h4>
                        <p>Ok so I barely passed Java 101 class at this point, it starts to get easier right? Not so fast, 
                        you may know how to do something useful with a program like print "Hello World!", know the difference 
                        between a float and an integer and even know what arrays are, but those are just the building blocks 
                        of this new thing that we call classes and objects! Since I had zero knowledge on how computer 
                        programs worked prior to enrolling into Computer Science, the learning curve was very steep as I had 
                        to completely change the way I think. However, after those first two introduction classes to Java, I 
                        was feeling more at ease and learned faster the various topics such as JavaScript, PHP and Databases.</p>
                    </TimelineItem>
                    <TimelineItem
                    key="003"
                    dateText="2014"
                    style={{ color: '#e86971' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'}}>
                        <h4>My first real world experience</h4>
                        <p>At the end of my program I did an internship at Bombardier Aerospace which wasn't doing so bad at the 
                        time and it was a nice introduction to the work environment. I was 19 at the time and all of my 
                        colleagues were at least 30 with the majority of them being over 40. On my first day, a consultant was 
                        about to spend days reformatting tens of thousands of records in a CSV file. My mentor suggested that 
                        would be a good first project, so in a few hours I automatically processed all the rows and saved days 
                        if not a whole week of tedious manual work to that person which gave me the confidence boost I needed. 
                        All in all, it was a very good environment for a first internship and I am very grateful for it. My main 
                        project was generating charts using Java, Javascript and SQL. Before I came, the charts needed to be 
                        generated manually in Excel or Access which was a tedious process, but with some mentoring, I was able 
                        to create a service from scratch that dynamically generates charts. It felt very rewarding to finally 
                        produce something tangible that will be used after the due date!</p>
                    </TimelineItem>
                    <TimelineItem 
                    key="004" 
                    dateText="2014 – 2015" 
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    style={{ color: "#61b8ff"}}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'}}>
                    <h4>The first crossroad faced</h4>
                    <p>Following my internship, I had officially graduated from a Computer Science program. I had two choices ahead: 
                    continue with my education and get a Bachelor in Software Engineering or become one of those self-taught engineers 
                    who learned on the job. However, at the time, I felt a bit lost in what direction I wanted to take with my
                    career, so I went with the safer picked the safe pick of going on with my education. I could have gotten an 
                    additional 3 years of practical experience by the end of my bachelor, but if I would have started in a company 
                    with bad practices, it would have been harder to change. At the start of university, I was extremely motivated. 
                    Mostly everyone seemed to have done internship as well, so everybody was very hands-on and it was challenging. After 
                    a hard semester of adjustment to the likes of calculus, I did my second internship at Ericsson. This was my first 
                    experience in a fully agile team which allowed me to greatly improved my soft skills. Our team was composed of a 
                    product owner, a senior developer and six interns. While you probably imagine this was pure chaos, it actually 
                    worked out pretty well! We were not the type of interns causing chaos left and right, we were the type of getting 
                    sh#t done! The previous interns started a test automation framework, however it needed some love and more features.
                    During that internship, I learned to code in Python, Bash and use Jenkins. More importantly, I underestimated tasks,
                    tried to solve problems on my own for too long and created false expectations in stakeholders of other teams. This 
                    is more important, because I learned much more from that than from the good which I swear I a lot more value than 
                    harm!</p>
                    </TimelineItem>
                    <TimelineItem
                    key="005"
                    dateText="Winter 2017"
                    style={{ color: '#e86971' }}
                    bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'}}>

                    </TimelineItem>
                    <TimelineItem>
                        
                    </TimelineItem>
                </Timeline>
                <p>With time, I started to being more at ease solving the various 
                challenges of programming and started to actually like it! From there, I knew this was my career path, 
                but I wasn't sure what to specialize in. So, over the course of the following years I did a bit of 
                everything including web development, test automation and embedded development. At that point, I felt a
                bit lost because none of those specialization met what I had in mind. I decided to explore one last area 
                before calling it quits and that is when I joined TickSmith mostly working with Big Data tools and AWS.
                I feel empowered knowing that the code that I right is responsible to ingest, process and distribute 
                terrabytes of data. Coupling between components must be reduced at a maximum for each component to be 
                ready to be scaled up exponentially. I love that the most speciliazed and performant frameworks used in 
                our tech stack such as Spark, Hive and Impala are all open-sourced. However, when leveraging open source 
                frameworks there is often a lot of manual setup required to do on our own. I worked with some great DevOps
                specialists that introduced and empowered me to use and understand the moving pieces in our infrastructure 
                such as AWS, Terraform and Ansible. From there, I tried to be more autonomous and rely less on the DevOps. 
                I seized the great opportunity offered by my company to pass the AWS Associate Developer certification and 
                it allowed me to see the services I was often using from a different perspective so that I would truly 
                understand them. This last year was worth like 3 years of experience for me, I feel much more confident 
                now and ready to take on any challenges that come up!
                </p>
            
            </div>
            )
        }
    }
    
export default About
    