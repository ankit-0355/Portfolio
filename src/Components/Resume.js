import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import img from '../img1.jpg'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={img}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Ankit Prajapati</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I did My Initial education from Chennai Tamilnadu. Completed my 10 and 12th from Gujarat with 85% and 76% rspectively. Currently Pursuing B.Tech In CSE.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Pramukh Aura, Gandhinagar, Gujarat</p>
            <h5>Phone</h5>
            <p>8905102211</p>
            <h5>Email</h5>
            <p>prajapatiankits810@gmail.com</p>
            <h5>Web</h5>
            <p><a href='https://www.linkedin.com/in/ankit-prajapati-a7602a1b3/'>LinkedIn</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2011}
              endYear={2015}
              schoolName="SGVP"
              schoolDescription="Located in Ahmedabad Gujarat"
               />

               <Education
                 startYear={2017}
                 endYear={2021}
                 schoolName="Srm University"
                 schoolDescription="Located in Chennai Tamilnadu"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Intern"
                jobDescription="Worked as Software Testing Engineer"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Python"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;