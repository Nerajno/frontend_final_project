import React from 'react';
import { Grid, Header,} from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Component Imports
import Landing from '../Landing'
import Login from './Login';
import Register from './Register';
import LoggedInUser from './LoggedInUser'


class MainContainer extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {color: "#282c34" };
  }
  
	render() {
    //const loggedIn = localStorage.jwt !== undefined; // how to use
		return (
      
            <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: '50vw' }}>
              <Header as='h2' color='teal' textAlign='center'>
              <a href='/'>Welcome to Native Treats</a>
            {/* <LoggedInUser /> */}
          </Header>
          <Router>
          <Switch>
              <Route exact path='/' render={() => <Landing />}/>
              <Route exact path='/Login' render={() => <Login />}/>
              <Route exact path='/Register' render={() => <Register />}/> 
              <Route exact path= '/LoggedInUser' render={(props) => <LoggedInUser props={props} />}/>   
              {/* log route above to render to specific route if logged in       */}
          </Switch>
          </Router>
            </Grid.Column>
          </Grid>
		);
	}
}

export default MainContainer;
