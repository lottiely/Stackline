import React from 'react';

const productDetails = (props) => {

    const tags = props.tags;

    return (
        <div className="tags">
            <ul>
                {tags.map((tag, idx) =>
                    <a href="#" key={idx}>{tag}</a>
                )}
            </ul>
        </div>
    );
};

export default productDetails;