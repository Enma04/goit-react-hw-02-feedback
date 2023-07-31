import React, { Component } from 'react';
import css from '../FeedBack/FeedBack.module.css';

export default class Section extends Component {
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
