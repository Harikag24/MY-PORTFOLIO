import React from 'react'
import './Projects.css'

function Experience() {
  return (
    <section id="projects" className="projects">

        <div className="projects-section-title">
        
        <h3>Professional Experience</h3>
        <div className="projects-section">
            {/* <h3>Professional Experience</h3> */}

            <div className='project'>
            <h4>Teaching Assistant - University of Texas at Dallas</h4>
          <p><strong>Feb 2023 - Present</strong></p>
          
           <p>Facilitated lectures, graded assignments, provided mentorship to students,and actively contributed to curriculum development, contributing to effective learning.
              Organized outreach programs and mentored high school students in building strong foundation in JAVA programming also mentored students of Grades 1 to 5 to develop interest in Computer programming by teaching them basics of
              computer science fundamentals.
          </p>
            </div>

            <div className='project'>
            <h4>Software Engineer - EPAM Systems</h4>
          <p><strong>Nov 2021 - Dec 2022</strong></p>
          
           <p>Developed and integrated front-end and back-end features for Google Maps using Spring, Angular, TypeScript, and JavaScript.
              Built user-friendly interface components that improved how users interact with the app.
              Worked with back-end developers to connect the front end with server data, ensuring smooth operation.
              Helped design the user interface, making sure it was easy to use and met user needs.
              Wrote test cases to check the functionality of UI components, which helped catch issues early and improve overall performance, contributing to a 43% reduction in latency.
          </p>
            </div>

            <div className='project'>
            <h4>SWE Intern - EPAM Systems</h4>
          <p><strong>Jun 2021 - Oct 2021</strong></p>
          
            <p> Worked on an internal project in Epam “ASSIST”. Developed application features as part of my project responsibilities using React.
                Developed interactive UI components and responsive layouts using React and Material-UI, enhancing user experience with modern design elements.
                Collaborated with API development teams to integrate back-end services, debugging and resolving integration issues to improve data flow and reduce response times.
                Tested and validated API responses using Postman, ensuring accurate data communication between front-end and back-end services.
          </p>
            </div>


        </div>
        </div>
        
    </section>
  )
}

export default Experience
