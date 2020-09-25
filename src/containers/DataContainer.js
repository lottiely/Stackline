import React, { Component } from 'react'
import Table from '../components/Data/DataTable';

class DataContainer extends Component {
    render() {
        return (
            <div id="data-container">
                <Table sales={this.props.sales} />
            </div>
        )
    }
}

export default DataContainer;
