import './App.css';
import React from "react";
import ReactDOM, { render } from "react-dom";
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/main.js';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title={<a href='/' style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</a>} scroll>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
          <Drawer title={<a style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</a>}>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
