import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPets } from '../actions';
import PetsNew from './PetsNew';
import PetsShow from './PetsShow';
import PetsList from '../components/PetsList';

class PetsPage extends Component {

  componentDidMount() {
    this.props.fetchPets();
  }

  render() {

    const { match, pets } = this.props;

    return (
    <div>
      <PetsList pets={this.props.pets}/>
      <Switch>  {/* Make sure to wrap all of your Routes as children of the Switch component*/ }
          <Route path={`${match.url}/new`} component={PetsNew} />
          <Route path={`${match.url}/:petId`} component={PetsShow}/>
      </Switch>
    </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);






