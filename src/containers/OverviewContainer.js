import React, { Component } from 'react'
import Overview from '../components/Data/Overview';

class OverviewContainer extends Component {

    render() {
        return (
            <div id="overview" className="card-style">
                <Overview data={this.props.data} />
            </div>
        )
    }
}
export default OverviewContainer;
