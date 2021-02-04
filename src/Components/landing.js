import React from 'react';
import {Grid, Cell} from 'react-mdl';
import img from '../img1.jpg';

class Landing extends React.Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
              <Cell col={12}>
                <img
                  src={img}
                  alt="avatar"
                  className="avatar-img"
                  />
    
                <div className="banner-text">
                  <h1>Full Stack Web Developer</h1>
    
                <hr/>
    
              <p>Python | Java | JavaScript | React | Html/Css | NodeJS | Express | MongoDB</p>
    
            <div className="social-links">
    
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ankit-prajapati-a7602a1b3/" rel="noopener noreferrer" target="_blank">
                <h4>LinkedIn</h4>
              </a>
    
              {/* Github */}
              <a href="https://github.com/ankit-0355" rel="noopener noreferrer" target="_blank">
                <h4>Github</h4>
              </a>
       
            </div>
                </div>
              </Cell>
            </Grid>
          </div>
        );
    }
}

export default Landing;