import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../FeedBack/FeedBack.module.css';

export default class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    percentage: PropTypes.number,
  };

  render() {
    const { good, neutral, bad, total, percentage } = this.props;

    return (
      <ul className={css.statisticsList}>
        <li className={css.statisticsItem}> Good: {good} </li>
        <li className={css.statisticsItem}> Neutral: {neutral} </li>
        <li className={css.statisticsItem}> Bad: {bad} </li>
        <li className={css.statisticsItem}> Total opinions: {total} </li>
        <li className={css.statisticsItem}>Positive feedback: {percentage}%</li>
      </ul>
    );
  }
}
