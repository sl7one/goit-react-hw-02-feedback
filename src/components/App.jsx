import React from 'react';
import FeedBackOptions from './widget/FeedBackOptions';
import Section from './widget/Section';
import Statistics from './widget/Statistic';
import Notification from './widget/Notification';

const btns = ['Good', 'Neutral', 'Bad'];

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) {
      return `0%`;
    }
    const result = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed(2);
    return `${result}%`;
  };

  onClick = event => {
    const target = event.target;
    this.setState(prevState => {
      return {
        [target.dataset.id]: prevState[target.dataset.id] + 1,
      };
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions options={btns} onLeaveFeedback={this.onClick} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
