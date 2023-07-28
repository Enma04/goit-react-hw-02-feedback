import React, { Component } from 'react';
import css from "./FeedBack.module.css";

export default class FeedBack extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  static propTypes = {};

  funcAdd(event) {
    const { step } = this.props;
    const { good, neutral, bad } = this.state;
    const type = event.target.id;

    if( type === "good" ) {
      this.setState({ good: good + step });
      return;
    }
    else if( type === "neutral" ) {
      this.setState({ neutral: neutral + step });
      return;
    }

    this.setState({ bad: bad + step });
  };

  constructor(props) {
    super(props);

    this.state = {
      good: this.props.initialValue,
      neutral: this.props.initialValue,
      bad: this.props.initialValue,
    };

    this.funcAdd = this.funcAdd.bind(this);
  }

  render() {
    const { children } = this.props;
    const { good, neutral, bad } = this.state;

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
        </ul>
        {children}
      </section>
    );
  }
}
