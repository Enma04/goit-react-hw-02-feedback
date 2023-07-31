import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../FeedBack/FeedBack.module.css';

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h4 className={css.titleFeedBack}>{title}</h4>
        {children}
      </section>
    );
  }
}
