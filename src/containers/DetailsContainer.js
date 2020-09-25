import React, { Component } from 'react'

import ProductDetails from '../components/productDetails';
import Nav from '../components/nav';

class DetailsContainer extends Component {
    render() {
        return (
            <div id="details-container" className="card-style">
                <ProductDetails data={this.props.data}/>
                <hr />
                <Nav data={this.props.data} />
            </div>
        )
    }
}

export default DetailsContainer;
