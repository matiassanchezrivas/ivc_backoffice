import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import YellowBar from '../components/YellowBar';
import NavBar from './NavbarContainer';
import LoginContainer from './LoginContainer';


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (<div className="App">
      <YellowBar />
      <NavBar />
      <Switch>
        <Route exact path="/login/" component={LoginContainer} />
        <Route exact path="/index" component={null} />
        <Redirect from="/" to="index" />
      </Switch>
      <Footer />
    </div>);
  }
}
const mapDispatchToProps = function (dispatch) {
  return ({
    //fetchUser: (id) => dispatch(fetchUser(id)),
  })
}


const mapStateToProps = function (state) {
  return {
    //selectedUser: state.users.selectedUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);