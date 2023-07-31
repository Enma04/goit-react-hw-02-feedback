import React, { Component } from 'react';
import css from '../FeedBack/FeedBack.module.css';

export default class FeedbackOptions extends Component {

  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div className={css.buttonGroup}>
        <button id="good" className={css.btnFeedBack} onClick={onLeaveFeedback}>
          Good
        </button>
        <button id="neutral" className={css.btnFeedBack} onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button id="bad" className={css.btnFeedBack} onClick={onLeaveFeedback}>
          Bad
        </button>
      </div>
    );
  }
}
