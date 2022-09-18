import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <section className={css.feedbackStatistics}>
    <div>
      <ul className={css.feedbackStatistics__list}>
        <li className={css.feedbackStatistics__li}>
          <span>Good: {good}</span>
        </li>
        <li className={css.feedbackStatistics__li}>
          <span>Neutral: {neutral}</span>
        </li>
        <li className={css.feedbackStatistics__li}>
          <span>Bad: {bad}</span>
        </li>
        <li className={css.feedbackStatistics__li}>
          <span>Total: {total}</span>
        </li>
        <li className={css.feedbackStatistics__li}>
          <span>Positive feedback: {percentage}%</span>
        </li>
      </ul>
    </div>
  </section>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
