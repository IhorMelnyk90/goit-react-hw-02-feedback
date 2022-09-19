import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => (
  <section className={css.feedbackControls}>
    <ul className={css.feedbackControls__container}>
      {options.map(option => (
        <li key={option} className={css.feedbackControls__li}>
          <button
            type="button"
            name={option}
            onClick={onClick}
            className={css.feedbackControls__button}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  </section>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};
