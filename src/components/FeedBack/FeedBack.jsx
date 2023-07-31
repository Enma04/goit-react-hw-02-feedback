import React, { Component } from 'react';
import css from "./FeedBack.module.css";

export default class FeedBack extends Component {
//--------------------------------------
//------------- PROPS CLASS DEFINITIONS
  static defaultProps = {
    step: 1,
    total: 0,
    percentage: 0,
    initialValue: 0,
  };

  static propTypes = {};


//--------------------------------------
//------------- CLASS FUNCTIONS
  funcAdd(event) {
    const { step } = this.props;
    const { good, neutral, bad } = this.state;
    const type = event.target.id;

    if( type === "good" ) {
      this.setState({ good: good + step });
    }
    else if( type === "neutral" ) {
      this.setState({ neutral: neutral + step });
    }
    else if( type === "bad" ) {
      this.setState({ bad: bad + step });
    }

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback() {
    this.setState((prev) => {
      //console.log("preview: ", prev);
      const { good, neutral, bad } = prev;
      return { total: ( good + neutral + bad ) };
    });
  }

  countPositiveFeedbackPercentage() {
    this.setState((prev) => {
      //console.log("preview: ", prev);
      const { good, total } = prev;
      return { percentage: Math.round( (good / total) * 100 ) };
    });
  }

//--------------------------------------
//------------- CLASS CONSTRUCTOR
  constructor(props) {
    super(props);

    this.state = {
      good: this.props.initialValue,
      neutral: this.props.initialValue,
      bad: this.props.initialValue,
      total: this.props.initialValue,
      percentage: this.props.initialValue,
    };

    this.funcAdd = this.funcAdd.bind(this);
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage.bind(this);
  }

//--------------------------------------
//------------- RENDER METOD
  render() {
    const { children } = this.props;
    const { good, neutral, bad, total, percentage } = this.state;

    return (
      <section className="feedBackSec">
        <h4 className={css.titleFeedBack}>Please Leave a Feedback</h4>
        <div className={css.buttonGroup} >
          <button id='good' className={css.btnFeedBack} onClick={ this.funcAdd } >Good</button>
          <button id='neutral' className={css.btnFeedBack} onClick={ this.funcAdd } >Neutral</button>
          <button id='bad' className={css.btnFeedBack} onClick={ this.funcAdd } >Bad</button>
        </div>
        <h4 className={css.titleFeedBack}>Statistics</h4>
        <ul className={css.statisticsList}>
          <li className={css.statisticsItem}> Good: {good} </li>
          <li className={css.statisticsItem}> Neutral: {neutral} </li>
          <li className={css.statisticsItem}> Bad: {bad} </li>
          <li className={css.statisticsItem}> Total opinions: {total} </li>
          <li className={css.statisticsItem}> Positive feedback: {percentage}% </li>
        </ul>
        {children}
      </section>
    );
  }
}
