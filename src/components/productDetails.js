import React from 'react';
import Tags from './tags';

const productDetails = (props) => {

    return (
        <div className="product-details center">
            <img src={props.data.image} alt="ProductImage" />
            <div className="product-text center">
                <h2>{props.data.title}</h2>
                <p className="subtitle">{props.data.subtitle}</p>
            </div>
            <hr />
            <Tags tags={props.data.tags} />
        </div>
    );
};

export default productDetails;