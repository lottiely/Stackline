import React, { Component } from 'react'

import Header from '../components/header';
import DetailsContainer from './DetailsContainer';
import DataContainer from './DataContainer';
import Overview from './OverviewContainer';
import { Route, Switch } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <div id="layout">
                <Header />
                { this.props.loading
                ? null
                : <main className="content-container">
                    <DetailsContainer data={this.props.data} />
                    <Switch>
                        <Route exact path="/stackline/" render={(props) => <Overview data={this.props.data} />} />
                        <Route path="/stackline/sales" render={(props) => <DataContainer sales={this.props.data.sales} />} />
                    </Switch>
                </main>
                }
            </div>
        )
    }
}

export default Layout;
