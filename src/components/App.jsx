import React, { Component } from 'react';
import css from './App.module.css';
import Section from './Section/';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  onBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    if (!total) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    if (total > 0) {
      return (
        <div className={css.feedbackContainer}>
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              onGood={this.onGood}
              onNeutral={this.onNeutral}
              onBad={this.onBad}
            />
          </Section>
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          </Section>
        </div>
      );
    }
    return (
      <div className={css.feedbackContainer}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onGood={this.onGood}
            onNeutral={this.onNeutral}
            onBad={this.onBad}
          />
        </Section>
        <Notification message={'There is no feedback'} />
      </div>
    );
  }
}

export default App;
