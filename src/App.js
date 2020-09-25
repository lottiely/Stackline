import React, { Component } from 'react';
import './style/Main.scss';
import Layout from './containers/Layout';
import { fetchData } from './actions/actions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        {this.props.loading 
          ? null
          :<Layout data={this.props.data} loading={this.props.loading} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
