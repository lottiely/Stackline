import React, { Component } from 'react';

class Overview extends Component {

    render() {
        return (
            <div className="overview">
                <div className="details">
                    <h1>Details</h1>
                    <ul>
                        {this.props.data.details.map((detail, idx) =>
                            <p key={idx}>{detail}</p>
                        )}
                    </ul>
                </div>
                <hr />
                <div className="details">
                    <h1>Reviews</h1>
                    <ul>
                        {this.props.data.reviews.map((review, idx) => {
                            return (
                                <div key={idx}>
                                <p><b>{review.customer}</b></p>
                                <p><b>Score:</b> {review.score}</p>
                                <p>{review.review}</p>
                                </div>
                            )}
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}



export default Overview;
