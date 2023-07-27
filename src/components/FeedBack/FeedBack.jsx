import React, { Component } from 'react';
//import css from "./FeedBack.module.css";

export default class FeedBack extends Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  render() {
    const { children } = this.props;
    const { good, neutral, bad } = this.state;

    return (
      <section className="feedBackSec">
        <h4 className="titleFeedBack">Please Leave a Feedback</h4>
        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <h4 className="titleFeedBack">Statistics</h4>
        <ul className="statisticsList">
          <li className="statisticsItem"> Good: {good} </li>
          <li className="statisticsItem"> Neutral: {neutral} </li>
          <li className="statisticsItem"> Bad: {bad} </li>
        </ul>
        {children}
      </section>
    );
  }
}
