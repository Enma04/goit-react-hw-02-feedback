import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export default class FeedBack extends Component {
  //--------------------------------------
  //------------- PROPS CLASS DEFINITIONS
  static defaultProps = {
    step: 1,
    total: 0,
    percentage: 0,
    initialValue: 0,
  };

  static propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };

  //--------------------------------------
  //------------- CLASS FUNCTIONS
  funcAdd(event) {
    const type = event.target.id;
    const { step } = this.props;

    this.setState( prevState => ({
      [type]: prevState[type] + step,
    }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  countTotalFeedback() {
    this.setState(prev => {
      //console.log("preview: ", prev);
      const { good, neutral, bad } = prev;
      return { total: good + neutral + bad };
    });
  }

  countPositiveFeedbackPercentage() {
    this.setState(prev => {
      const { good, total } = prev;
      return { percentage: Math.round((good / total) * 100) };
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
    this.countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage.bind(this);
  }
  /*
 
*/
  //--------------------------------------
  //------------- RENDER METOD
  render() {
    const { good, neutral, bad, total, percentage } = this.state;

    return (
      <div className="feedBackSec">
        <Section title="Please Leave a Feedback">
          <FeedbackOptions onLeaveFeedback={this.funcAdd} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
