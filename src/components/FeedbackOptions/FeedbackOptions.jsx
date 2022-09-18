import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <section className={css.feedbackControls}>
    <div className={css.feedbackControls__container}>
      <button
        type="button"
        className={css.feedbackControls__button}
        onClick={onGood}
      >
        Good
      </button>
      <button
        type="button"
        className={css.feedbackControls__button}
        onClick={onNeutral}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.feedbackControls__button}
        onClick={onBad}
      >
        Bad
      </button>
    </div>
  </section>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
