import React, { Component } from "react";
//import css from "./FeedBack.module.css";

export default class FeedBack extends Component {
    static defaultProps = {};

    static propTypes = {};

    render() {

        const { children } = this.props;

        return (
            <section className="feedBackSec">
                <h3> Section FeedBack </h3>
                <h4>Please Leave a Feedback</h4>
                <div>
                    <button>Good</button>
                    <button>Neutral</button>
                    <button>Bad</button>
                </div> 
                <h4>Statistics</h4>
                {children}
            </section>
        );
    }
}